import {act, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {sessionUrl} from '../utils/constants'
import {mockVisitResponseWithActiveEncounter} from '../__mocks__/activeVisitWithActiveEncounters.mock'
import {mockSessionResponse} from '../__mocks__/sessionResponse.mock'
import {mockVisitResponse} from '../__mocks__/visitResponse.mock'
import App from './App'

describe('Speech Assistant App', () => {
  const testUrlWithPatientId =
    'http://localhost/patient/dbebab89-40b4-4121-a786-110e61bbc714'
  const testSearchUrl = 'http://localhost/patient/search'
  const testCookieWithLocationId =
    'bahmni.user=%22superman%22; app.clinical.grantProviderAccessData=null; bahmni.user.location=%7B%22name%22%3A%22OPD-1%22%2C%22uuid%22%3A%22c58e12ed-3f12-11e4-adec-0800271c1b75%22%7D'

  afterEach(() => jest.clearAllMocks())

  it('should not show consultation pad button when patient uuid is not present in the url', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost/patient/',
      },
    })

    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch.mockResolvedValue({
      json: () => mockSessionResponse,
      ok: true,
    })
    render(<App />)

    expect(
      screen.queryByRole('button', {
        name: /Notes/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('should not show consultation pad button when patient uuid is present in the url but location is not set', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: testUrlWithPatientId,
      },
    })
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch.mockResolvedValue({
      json: () => mockSessionResponse,
      ok: true,
    })

    render(<App />)

    expect(
      screen.queryByRole('button', {
        name: /Notes/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('should show consultation pad button when there is active visits for the patient in the set location', async () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: testSearchUrl,
      },
    })
    Object.defineProperty(document, 'cookie', {value: testCookieWithLocationId})

    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockSessionResponse,
        ok: true,
      })
      .mockResolvedValue({
        json: () => mockVisitResponse,
        ok: true,
      })

    render(<App />)

    act(() => {
      window.location.href = testUrlWithPatientId
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    const consultationPadButton = await screen.findByRole('button', {
      name: /Notes/i,
    })
    expect(consultationPadButton).toBeInTheDocument()
    const mockSessionUrl = mockFetch.mock.calls[0][0]
    const mockVisitUrl = mockFetch.mock.calls[1][0]
    expect(mockSessionUrl).toBe(sessionUrl)
    expect(mockVisitUrl).toBe(
      '/openmrs/ws/rest/v1/visit?includeInactive=false&patient=dbebab89-40b4-4121-a786-110e61bbc714&location=c58e12ed-3f12-11e4-adec-0800271c1b75&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)',
    )
  })

  it('should show the fetched saved consultation notes in the text area when notes button is clicked', async () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: testSearchUrl,
      },
    })
    Object.defineProperty(document, 'cookie', {value: testCookieWithLocationId})
    const mockFetch = global.fetch as jest.Mock
    mockFetch.mockResolvedValue({
      json: () => mockVisitResponseWithActiveEncounter,
      ok: true,
    })
    render(<App />)
    act(() => {
      window.location.href = testUrlWithPatientId
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    const consultationPadButton = await screen.findByRole('button', {
      name: /Notes/i,
    })
    expect(consultationPadButton).toBeInTheDocument()
    await userEvent.click(consultationPadButton)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveValue('Saving Notes')
  })

  it('should not show consultation pad button when there is no active visits for the patient in the set location', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: testSearchUrl,
      },
    })
    Object.defineProperty(document, 'cookie', {value: testCookieWithLocationId})

    const mockEmptyResponse = {results: []}
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockSessionResponse,
        ok: true,
      })
      .mockResolvedValue({
        json: () => mockEmptyResponse,
        ok: true,
      })

    render(<App />)

    act(() => {
      window.location.href = testUrlWithPatientId
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    expect(
      screen.queryByRole('button', {
        name: /Notes/i,
      }),
    ).not.toBeInTheDocument()

    const mockSessionUrl = mockFetch.mock.calls[0][0]
    const mockVisitUrl = mockFetch.mock.calls[1][0]
    expect(mockSessionUrl).toBe(sessionUrl)
    expect(mockVisitUrl).toBe(
      '/openmrs/ws/rest/v1/visit?includeInactive=false&patient=dbebab89-40b4-4121-a786-110e61bbc714&location=c58e12ed-3f12-11e4-adec-0800271c1b75&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)',
    )
  })
})
