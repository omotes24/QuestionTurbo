import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Mic2, UserRound } from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";

const steps = [
  {
    href: "/profile",
    label: "01",
    title: "自分を入れる",
    body: "ES、研究、強み、弱み、挫折経験を貼る。",
    icon: UserRound,
  },
  {
    href: "/company",
    label: "02",
    title: "会社を作る",
    body: "Webサイトと志望コースからスロット化する。",
    icon: BriefcaseBusiness,
  },
  {
    href: "/practice",
    label: "03",
    title: "練習する",
    body: "質問を選び、回答案と改善点を見る。",
    icon: Mic2,
  },
];

export default function Home() {
  return (
    <AppShell>
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="border-b border-neutral-950 pb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-red-600">
            Interview Assistant
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl lg:text-8xl">
            面接準備を
            <br />
            会社ごとに整える。
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-neutral-600">
            自分の情報、企業Webサイト、志望コースだけを起点に、面接前の理解メモと回答案を作ります。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/profile"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              はじめる
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/company"
              className="inline-flex h-12 items-center rounded-full border border-neutral-950/15 bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
            >
              会社スロットへ
            </Link>
          </div>
        </div>

        <aside className="rounded-[32px] border border-neutral-950 bg-neutral-950 p-5 text-white shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            Current Flow
          </p>
          <div className="mt-5 grid gap-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Link
                  key={step.href}
                  href={step.href}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-white hover:bg-white hover:text-neutral-950"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-semibold text-red-400">
                      {step.label}
                    </span>
                    <Icon
                      className="h-5 w-5 text-neutral-500 group-hover:text-neutral-950"
                      aria-hidden
                    />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-400 group-hover:text-neutral-600">
                    {step.body}
                  </p>
                </Link>
              );
            })}
          </div>
        </aside>
      </section>
    </AppShell>
  );
}
