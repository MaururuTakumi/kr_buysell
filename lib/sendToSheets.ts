export async function sendToSheets(email: string): Promise<{ success: boolean; error?: string }> {
  const endpoint = process.env.NEXT_PUBLIC_SHEETS_ENDPOINT

  if (!endpoint) {
    console.error('Google Sheets endpoint not configured')
    return { success: false, error: 'Configuration error' }
  }

  try {
    // FormDataを使用してGASに送信
    const formData = new FormData()
    formData.append('email', email)
    formData.append('timestamp', new Date().toISOString())
    formData.append('source', 'visitplus-kr-landing')

    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    })

    // レスポンスを取得
    const responseText = await response.text()
    console.log('GAS Response:', responseText)

    // レスポンスをJSONとしてパース
    try {
      const responseData = JSON.parse(responseText)
      if (responseData.success) {
        console.log('Email successfully saved to Google Sheets:', email)
        return { success: true }
      } else {
        console.error('GAS returned error:', responseData.message)
        return { success: false, error: responseData.message }
      }
    } catch (parseError) {
      // JSONパースに失敗した場合でも、リクエストは成功とみなす
      console.log('Response is not JSON, but request was sent:', responseText)
      return { success: true }
    }
  } catch (error) {
    console.error('Error sending to Google Sheets:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}