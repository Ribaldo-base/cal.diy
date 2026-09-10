"use client";

import React from "react";

import { Icon } from "@calcom/ui/components/icon";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.12 15.9-5.76l-7.73-6c-2.16 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function ChatToEditFab() {
  return (
    <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-gray-800">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Chat to Edit
    </button>
  );
}

export function EmailDomainDashboard() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-24 pt-8">
      {/* Domains dropdown */}
      <div className="mb-6 flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
        <span className="text-sm font-medium text-gray-900">Domains</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Card 1: Sending address */}
      <div className="mb-4 rounded-xl border border-gray-200 p-5">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-base font-semibold text-gray-900">Sending address</h3>
          <Icon name="info" className="h-4 w-4 text-gray-400" />
        </div>
        <p className="mb-2 text-sm font-medium text-gray-900">no-reply@matteobalducci.net</p>
        <span className="mb-3 inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs text-amber-800">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          Pending verification
        </span>
        <p className="mb-4 text-sm text-gray-500">Sender Name: Ciao Matteino App</p>
        <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50">
          Cancel
        </button>
      </div>

      {/* Card 2: Business email */}
      <div className="rounded-xl border border-gray-200 p-5">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-base font-semibold text-gray-900">Business email</h3>
          <Icon name="info" className="h-4 w-4 text-gray-400" />
        </div>
        <button className="mb-5 w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
          Get a business email
        </button>
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <GoogleIcon />
            <span className="text-sm font-medium text-gray-700">Google Workspace</span>
          </div>
          <div className="mb-3 flex gap-3">
            <GoogleIcon />
            <GoogleIcon />
            <GoogleIcon />
            <GoogleIcon />
            <GoogleIcon />
            <GoogleIcon />
          </div>
          <h4 className="mb-1 text-sm font-semibold text-gray-900">Get a business email @matteobalducci.net</h4>
          <p className="text-sm text-gray-600">
            Use Gmail with your custom domain to send professional emails and build trust with your customers.
          </p>
        </div>
      </div>

      <ChatToEditFab />
    </div>
  );
}

export default EmailDomainDashboard;
