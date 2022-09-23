import {act, render, screen} from '@testing-library/react'
import React from 'react'
import {mockVisitResponse} from '../__mocks__/visitResponse.mock'
import App from './App'
global.fetch = jest.fn().mockImplementation()

describe('Speech Assistant App', () => {
  const testUrlWithPatientId =
    'http://localhost/patient/dbebab89-40b4-4121-a786-110e61bbc714'
  const testSearchUrl = 'http://localhost/patient/search'
  const testCookieWithLocationId =
    'bahmni.user=%22superman%22; app.clinical.grantProviderAccessData=null; bahmni.user.location=%7B%22name%22%3A%22OPD-1%22%2C%22uuid%22%3A%22c58e12ed-3f12-11e4-adec-0800271c1b75%22%7D'
  const mockFetch = global.fetch as jest.Mock

  it('should not show consultation pad button when patient uuid is not present in the url', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost/patient/',
      },
    })

    render(<App />)

    expect(
      screen.queryByRole('button', {
        name: /Consultation Pad/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('should not show consultation pad button when patient uuid is present in the url but location is not set', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: testUrlWithPatientId,
      },
    })
    render(<App />)
    expect(
      screen.queryByRole('button', {
        name: /Consultation Pad/i,
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

    render(<App />)
    mockFetch.mockResolvedValue({
      json: () => mockVisitResponse,
      ok: true,
    })
    act(() => {
      window.location.href = testUrlWithPatientId
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })

    const consultationPadButton = await screen.findByRole('button', {
      name: /Consultation Pad/i,
    })
    expect(consultationPadButton).toBeInTheDocument()
    const visitUrl = mockFetch.mock.calls[0][0]
    expect(visitUrl).toBe(
      '/openmrs/ws/rest/v1/visit?includeInactive=false&patient=dbebab89-40b4-4121-a786-110e61bbc714&location=c58e12ed-3f12-11e4-adec-0800271c1b75&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)',
    )
  })

  it('should not show consultation pad button when there is no active visits for the patient in the set location', async () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: testSearchUrl,
      },
    })
    Object.defineProperty(document, 'cookie', {value: testCookieWithLocationId})
    const mockEmptyResponse = {}
    mockFetch.mockResolvedValueOnce({
      json: () => mockEmptyResponse,
      ok: true,
    })

    render(<App />)

    await act(() => {
      window.location.href = testUrlWithPatientId
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    })
    expect(
      screen.queryByRole('button', {
        name: /Consultation Pad/i,
      }),
    ).not.toBeInTheDocument()
    const visitUrl = mockFetch.mock.calls[0][0]
    expect(visitUrl).toBe(
      '/openmrs/ws/rest/v1/visit?includeInactive=false&patient=dbebab89-40b4-4121-a786-110e61bbc714&location=c58e12ed-3f12-11e4-adec-0800271c1b75&v=custom:(uuid,visitType,startDatetime,stopDatetime,encounters)',
    )
  })
})
