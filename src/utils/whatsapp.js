export const WHATSAPP_NUMBER = "252615766571";

export function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
}

export function buildServiceMessage({ name, phone, company, service, budget, description }) {
  return `Salaam ILBAX Digital Solution,

Waxaan jeclaan lahaa inaan codsado adeeg.

Magaca: ${name}
Telefoonka: ${phone}
Shirkadda: ${company || "Lama sheegin"}
Adeegga: ${service}
Miisaaniyadda: ${budget || "Lama sheegin"}

Faahfaahinta mashruuca:
${description}

Mahadsanidiin.`;
}

export function buildContactMessage({ name, email, phone, subject, message }) {
  return `Salaam ILBAX Digital Solution,

Waxaan idiin soo dirayaa fariin xiriir ah.

Magaca: ${name}
Email: ${email}
Telefoonka: ${phone}
Mawduuca: ${subject}

Fariinta:
${message}

Mahadsanidiin.`;
}
