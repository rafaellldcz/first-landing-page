import type { LeadFormValues } from "@/lib/lead-schema";

type LeadResponse = {
  leadId: string;
  receivedAt: string;
};

export interface LeadCaptureProvider {
  captureLead(payload: LeadFormValues): Promise<LeadResponse>;
}

class MockLeadCaptureProvider implements LeadCaptureProvider {
  async captureLead(payload: LeadFormValues): Promise<LeadResponse> {
    const sourceLength = payload.message?.length ?? payload.name.length;
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Simula instabilidade de rede para testar UX de erro.
    const shouldFail = Math.random() < 0.2;

    if (shouldFail) {
      throw new Error("Falha temporária no envio. Tente novamente.");
    }

    return {
      leadId: `lead_${Date.now()}_${sourceLength}`,
      receivedAt: new Date().toISOString(),
    };
  }
}

const provider: LeadCaptureProvider = new MockLeadCaptureProvider();

export async function submitLead(payload: LeadFormValues): Promise<LeadResponse> {
  return provider.captureLead(payload);
}

