export class Theme {
  name: string | undefined;
  primary: string | undefined;
  primary2: string | undefined;
  accent: string | undefined;
  accent2: string | undefined;
  warn: string | undefined;
  warn2: string | undefined;
  background: string | undefined;

  constructor(name: string, primary: string, accent: string, warn: string, primary2: string, accent2: string, warn2: string, background: string) {
    this.name = name;
    this.primary = primary;
    this.accent = accent;
    this.warn = warn;
    this.primary2 = primary2;
    this.accent2 = accent2;
    this.warn2 = warn2;
    this.background = background;
  }
}
