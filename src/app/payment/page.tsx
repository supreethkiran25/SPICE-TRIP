import type { Metadata } from "next";
import { CreditCard, ShieldCheck, Lock, ExternalLink, CheckCircle2, Phone, AlertCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Official Payment Gateway & Booking Guide | SpiceTrip",
  description:
    "Secure payment information for SpiceTrip, a venture of Safe Wheels Group. Official Instamojo payment link, NEFT/RTGS bank details, and package EMI options.",
};

export default function PaymentPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Client Transactions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-4">
            Payment & Booking Options
          </h1>
          <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
            SpiceTrip provides transparent, encrypted payment channels. All transactions are protected and backed by immediate official digital GST receipts and booking vouchers.
          </p>
        </div>

        {/* Primary Gateway Card */}
        <div className="bg-white border border-sand/40 p-8 sm:p-12 rounded-sm shadow-md mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-sand/30">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-1">
                Official Online Gateway
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-deep">
                Instamojo Verified Client Portal
              </h2>
              <p className="text-xs text-foreground-muted mt-1">
                Supports all major Indian Debit & Credit Cards (Visa, MasterCard, RuPay), UPI, Net Banking, and Wallet transfers.
              </p>
            </div>
            <a
              href={COMPANY_INFO.integrations.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-forest hover:bg-terracotta text-white font-sans text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 shadow-md whitespace-nowrap"
            >
              <span>Pay on Instamojo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-xs text-foreground-muted">
            <div className="flex items-start space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>256-Bit SSL Encryption with multi-factor OTP verification.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>Instant email confirmation and payment reference number.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CreditCard className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>No unexpected convenience markups. Transparent billing.</span>
            </div>
          </div>
        </div>

        {/* Bank Transfer Details (NEFT / RTGS) */}
        <div className="bg-forest-deep text-sand-light p-8 sm:p-10 rounded-sm border border-forest mb-12">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Direct Bank Wire (NEFT / RTGS / IMPS)
          </h3>
          <p className="text-xs text-sand-light/80 leading-relaxed mb-6">
            For corporate invoices and large package reservations, you may transfer directly to our corporate bank account. Please notify your travel designer after initiating the transfer.
          </p>

          <div className="bg-forest/50 p-6 rounded-sm border border-sand/20 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-sand/70 uppercase text-[10px] block">Beneficiary Name</span>
                <strong className="text-white text-sm">SPICETRIP (A Venture of Safe Wheels)</strong>
              </div>
              <div>
                <span className="text-sand/70 uppercase text-[10px] block">Account Type</span>
                <strong className="text-white text-sm">Current Account</strong>
              </div>
              <div>
                <span className="text-sand/70 uppercase text-[10px] block">Bank Branch</span>
                <strong className="text-white text-sm">Mysore Main Branch, Karnataka</strong>
              </div>
              <div>
                <span className="text-sand/70 uppercase text-[10px] block">Account & IFSC Details</span>
                <span className="text-sand font-medium">Provided securely on your verified invoice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Package Tours on EMI */}
        <div className="bg-white border border-sand/40 p-8 rounded-sm shadow-sm mb-12">
          <h3 className="font-serif text-xl font-bold text-forest-deep mb-2">
            Package Tours on Easy EMI
          </h3>
          <p className="text-xs text-foreground-muted leading-relaxed mb-4">
            We partner with major leading banks to offer flexible 3, 6, 9, and 12-month zero or low-cost EMI schemes on both domestic and international holiday packages.
          </p>
          <div className="flex items-center space-x-4 text-xs">
            <span className="text-terracotta font-semibold">• HDFC Bank</span>
            <span className="text-terracotta font-semibold">• ICICI Bank</span>
            <span className="text-terracotta font-semibold">• SBI</span>
            <span className="text-terracotta font-semibold">• Axis Bank</span>
          </div>
        </div>

        {/* Verification Hotline */}
        <div className="p-6 bg-background-secondary/60 border border-sand/40 rounded-sm text-center">
          <p className="text-xs text-foreground-muted mb-2">
            Have questions regarding your payment invoice or transaction verification?
          </p>
          <a
            href="tel:+918214001100"
            className="inline-flex items-center space-x-2 text-forest hover:text-terracotta text-xs font-bold uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" />
            <span>Call Accounts Desk: +91 821 4001100</span>
          </a>
        </div>
      </div>
    </div>
  );
}

