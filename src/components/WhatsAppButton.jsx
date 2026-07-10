import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919412157363"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={24} fill="white" />
    </a>
  )
}
