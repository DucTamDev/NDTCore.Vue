export class HeaderBuilder {
  private headers: Record<string, string>;

  constructor() {
    this.headers = {};
  }

  // Add or set a header
  setHeader(key: string, value: string): HeaderBuilder {
    this.headers[key] = value;
    return this; // Allow chaining
  }

  // Remove a header
  removeHeader(key: string): HeaderBuilder {
    delete this.headers[key];
    return this;
  }

  // Set Content-Type for form data
  setFormDataContentType(isMultipart: boolean = true): HeaderBuilder {
    this.headers['Content-Type'] = isMultipart
      ? 'multipart/form-data'
      : 'application/x-www-form-urlencoded';
    return this;
  }

  // Set Authorization token
  setAuthorization(token: string): HeaderBuilder {
    this.headers['Authorization'] = `Bearer ${token}`;
    return this;
  }

  // Build and return the headers object
  build(): Record<string, string> {
    return this.headers;
  }
}
