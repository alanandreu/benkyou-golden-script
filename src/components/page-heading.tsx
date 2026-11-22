import type { ReactNode } from "react";
import { useT } from "@/lib/i18n";

export function PageHeading({ area, title, japanese, children }: { area: string; title: string; japanese: string; children?: ReactNode }) {
  const t = useT();
  return <header className="page-heading">
    <p className="eyebrow">BENKYOU / {t(area)}</p>
    <div className="page-title-row">
      <h1 className="page-title">{t(title)}</h1>
      <span className="page-title-japanese" lang="ja">{japanese}</span>
    </div>
    {children && <p className="page-intro">{typeof children === "string" ? t(children) : children}</p>}
  </header>;
}