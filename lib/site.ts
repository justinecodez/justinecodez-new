export const site = {
  name: "Justine Peterson Mahinyila",
  shortName: "justinecodez",
  title: "Solution Architect & Software Consultant in Tanzania",
  url: "https://justinecodez.com",
  // TODO: confirm — old site mixed hi@justinecode.com / justinecodes.com
  email: "hi@justinecodez.com",
  whatsappNumber: "255757714834",
  linkedin: "https://www.linkedin.com/in/justinecodez",
  github: "https://github.com/justinecodez",
  location: "Dar es Salaam, Tanzania",
  tagline: "Let's build something serious together.",
  taglineSw: "Tujenge Pamoja.",
  description:
    "Justine Mahinyila is a solution architect and fintech consultant in Dar es Salaam, Tanzania. He designs payment, messaging, and campaign infrastructure for banks, telecoms, and fintechs, builds WhatsApp Business API automation, and delivers corporate IT training.",
};

const defaultWhatsAppMessage =
  "Hi Justine — I found justinecodez.com and I'd like to talk about a project.";

export function whatsappLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
