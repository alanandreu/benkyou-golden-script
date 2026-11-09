import type { ReactNode } from "react";

export function PageHeading({ area, title, japanese, children }: { area: string; title: string; japanese: string; children?: ReactNode }) {
  return <header className="page-heading">
    <p className="eyebrow">BENKYOU / {area}</p>
    <div className="page-title-row">
      <h1 className="page-title">{title}</h1>
      <span className="page-title-japanese" lang="ja">{japanese}</span>
    </div>
    {children && <p className="page-intro">{children}</p>}
  </header>;
}