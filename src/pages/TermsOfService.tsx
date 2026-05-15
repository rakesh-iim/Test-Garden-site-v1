import React from 'react';
import { Helmet } from 'react-helmet-async';

export const TermsOfService = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <Helmet>
        <title>Terms of Service</title>
        <meta name="description" content="Review the Terms of Service for Urban Oasis. Understand the rules, guidelines, and agreements for using our landscaping services and website." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, urban oasis terms" />
      </Helmet>
      <h1 className="text-4xl font-display font-bold mb-8 text-on-surface">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-on-surface-variant mb-6">
          This is a placeholder page for the Terms of Service. You can update this page with your actual terms later.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-on-surface">1. Acceptance of Terms</h2>
        <p className="text-on-surface-variant mb-6">
          By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
      </div>
    </div>
  );
};
