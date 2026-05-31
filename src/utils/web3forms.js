const WEB3FORMS_API = 'https://api.web3forms.com/submit'

export async function submitWeb3Form(payload) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('Missing Web3Forms access key. Set VITE_WEB3FORMS_ACCESS_KEY in your environment.')
  }

  const response = await fetch(WEB3FORMS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ access_key: accessKey, ...payload }),
  })

  const data = await response.json()

  if (!data.success) {
    throw new Error(data.message || 'Failed to submit form.')
  }

  return data
}
