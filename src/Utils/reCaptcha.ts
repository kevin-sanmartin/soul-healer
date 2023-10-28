declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default class reCAPTCHA {
  siteKey: string;
  action: string;

  constructor(siteKey: string, action: string) {
    this.siteKey = siteKey;
    this.action = action;
  }

  async getToken(): Promise<string> {
    let token = "";
    await window.grecaptcha.execute(this.siteKey, { action: this.action }).then((response: string) => {
      token = response;
    });
    return token;
  }
}
