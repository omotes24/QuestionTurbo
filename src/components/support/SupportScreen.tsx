"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { AnswerWorkbench } from "@/components/answer/AnswerWorkbench";
import { PreInterviewLearningPanel } from "@/components/answer/PreInterviewLearningPanel";
import { AudioCapturePanel } from "@/components/audio/AudioCapturePanel";
import { PageHeader } from "@/components/layout/PageHeader";

export function SupportScreen() {
  const [consent, setConsent] = useState(false);
  const [selectedTranscript, setSelectedTranscript] = useState<{
    id: string;
    text: string;
  } | null>(null);

  return (
    <section>
      <PageHeader
        title="面接"
        description="面接前に学習し、質問を入力して回答案を作ります。音声を使う場合は、参加者へAI支援利用を明示してから開始します。"
      />
      <div className="mb-4 rounded-[28px] border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
        <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-emerald-950">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>参加者へAI支援利用を明示し、必要な同意を得ています。</span>
        </label>
      </div>
      {!consent ? (
        <div className="rounded-[28px] border border-neutral-950/10 bg-white p-6 text-sm font-medium leading-7 text-neutral-600 shadow-sm">
          上の確認を完了すると、音声入力と回答案作成を開始できます。
        </div>
      ) : (
        <div className="grid gap-4">
          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-800 shadow-sm">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            AI支援利用中であることを常時表示しています。
          </div>
          <PreInterviewLearningPanel />
          <AudioCapturePanel
            autoSubmitRemoteFinal
            onRemoteTranscript={(text) =>
              setSelectedTranscript({ id: crypto.randomUUID(), text })
            }
          />
          <AnswerWorkbench
            key={selectedTranscript?.id ?? "manual"}
            mode="support"
            initialQuestion={selectedTranscript?.text ?? ""}
            autoSource={selectedTranscript ? "remote-audio" : "manual"}
            autoGenerate={Boolean(selectedTranscript)}
            autoRunId={selectedTranscript?.id}
          />
        </div>
      )}
    </section>
  );
}
