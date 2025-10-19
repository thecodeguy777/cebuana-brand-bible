<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Cards</h1>
    <p class="body-large text-base-content/70 mb-12">
      Card components for displaying content, account information, and transaction details in the Corporate Internet Banking interface.
    </p>

    <!-- Premium Account Cards with Glassmorphism -->
    <ComponentPreview
      title="Premium Account Cards"
      description="Elevated account cards with glassmorphism effects and smooth animations."
      :code="premiumCardCode"
      language="html"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Platinum Card with Solid Background -->
          <div class="card-premium group">
            <div class="card-body text-white relative overflow-hidden" style="background-color: #003366;">

              <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <div class="badge badge-sm mb-2" style="background: rgba(255,255,255,0.2); border: none; color: white;">PLATINUM</div>
                    <p class="text-xs opacity-80">Savings Account</p>
                    <p class="text-sm font-semibold">****1234</p>
                  </div>
                  <svg class="w-10 h-10 opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
                <div class="mb-6">
                  <p class="text-xs opacity-70 mb-1">Available Balance</p>
                  <p class="text-3xl font-bold tracking-tight">₱125,450.00</p>
                  <p class="text-xs opacity-70 mt-1">+5.2% this month</p>
                </div>
                <div class="flex gap-2">
                  <button class="btn-glass flex-1">Transfer</button>
                  <button class="btn-glass flex-1">Details</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Gold Card with Border Animation -->
          <div class="card-premium-border group">
            <div class="card-body bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-[#E94B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <div class="badge badge-sm mb-2" style="background: linear-gradient(135deg, #E94B35 0%, #FF6B54 100%); border: none; color: white;">GOLD</div>
                    <p class="text-xs text-base-content/60">Checking Account</p>
                    <p class="text-sm font-semibold">****5678</p>
                  </div>
                  <svg class="w-10 h-10" style="color: #E94B35;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div class="mb-6">
                  <p class="text-xs text-base-content/60 mb-1">Available Balance</p>
                  <p class="text-3xl font-bold" style="color: #003366;">₱87,320.50</p>
                  <div class="flex items-center gap-2 mt-2">
                    <div class="badge badge-sm badge-success">Active</div>
                    <span class="text-xs text-base-content/50">Last transaction: 2h ago</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="btn-action flex-1">Pay Bills</button>
                  <button class="btn-outline-action flex-1">History</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Investment Card with Progress -->
          <div class="card-hover group">
            <div class="card-body">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <div class="badge badge-sm mb-2" style="background-color: #36D399; border: none; color: white;">ACTIVE</div>
                  <p class="text-xs text-base-content/60">Time Deposit</p>
                  <p class="text-sm font-semibold">****9012</p>
                </div>
                <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #36D399 0%, #22C55E 100%);">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
              <div class="mb-4">
                <p class="text-xs text-base-content/60 mb-1">Maturity Amount</p>
                <p class="text-3xl font-bold" style="color: #003366;">₱250,000.00</p>
              </div>
              <!-- Progress Bar -->
              <div class="mb-4">
                <div class="flex justify-between text-xs mb-2">
                  <span class="text-base-content/60">Progress to maturity</span>
                  <span class="font-semibold" style="color: #36D399;">78%</span>
                </div>
                <div class="progress-bar-container">
                  <div class="progress-bar-fill" style="width: 78%;"></div>
                </div>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-base-content/50">Started: Jan 1, 2024</span>
                <span class="font-semibold">Matures: Dec 31, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Interactive Transaction Cards -->
    <ComponentPreview
      title="Interactive Transaction Cards"
      description="Transaction history with hover effects and expandable details."
      :code="transactionCardCode"
      language="html"
    >
      <template #preview>
        <div class="space-y-3 max-w-2xl">
          <!-- Transaction with Expandable Details -->
          <div class="transaction-card group">
            <div class="flex items-center gap-4">
              <div class="transaction-icon transaction-icon-sent">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <p class="font-semibold">Money Transfer</p>
                  <div class="badge badge-xs badge-ghost">Completed</div>
                </div>
                <p class="text-sm text-base-content/60 truncate">To: Juan Dela Cruz • Account ****8901</p>
                <p class="text-xs text-base-content/50">Jan 15, 2025 • 10:30 AM • Ref: TXN123456789</p>
              </div>
              <div class="text-right flex-shrink-0">
                <p class="font-bold text-lg" style="color: #E94B35;">-₱5,000.00</p>
                <p class="text-xs text-base-content/50">Fee: ₱0.00</p>
              </div>
              <svg class="w-5 h-5 text-base-content/30 group-hover:text-base-content/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div class="transaction-card group">
            <div class="flex items-center gap-4">
              <div class="transaction-icon transaction-icon-received">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <p class="font-semibold">Salary Deposit</p>
                  <div class="badge badge-xs badge-success">Success</div>
                </div>
                <p class="text-sm text-base-content/60 truncate">From: ABC Corporation Payroll</p>
                <p class="text-xs text-base-content/50">Jan 14, 2025 • 2:15 PM • Ref: SAL202501</p>
              </div>
              <div class="text-right flex-shrink-0">
                <p class="font-bold text-lg text-success">+₱25,000.00</p>
                <p class="text-xs text-base-content/50">Monthly</p>
              </div>
              <svg class="w-5 h-5 text-base-content/30 group-hover:text-base-content/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div class="transaction-card group">
            <div class="flex items-center gap-4">
              <div class="transaction-icon transaction-icon-bill">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <p class="font-semibold">Bills Payment</p>
                  <div class="badge badge-xs badge-ghost">Completed</div>
                </div>
                <p class="text-sm text-base-content/60 truncate">Electric Bill - MERALCO • Account 1234-5678-90</p>
                <p class="text-xs text-base-content/50">Jan 13, 2025 • 9:00 AM • Ref: BP456789123</p>
              </div>
              <div class="text-right flex-shrink-0">
                <p class="font-bold text-lg" style="color: #E94B35;">-₱3,450.75</p>
                <p class="text-xs text-base-content/50">Auto-pay</p>
              </div>
              <svg class="w-5 h-5 text-base-content/30 group-hover:text-base-content/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Pricing Cards -->
    <ComponentPreview
      title="Pricing & Service Cards"
      description="Cards for displaying pricing tiers and service offerings."
      :code="pricingCardCode"
      language="html"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Basic Plan -->
          <div class="pricing-card">
            <div class="card-body">
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold mb-2">Basic</h3>
                <p class="text-xs text-base-content/60 mb-4">For individual users</p>
                <div class="mb-2">
                  <span class="text-4xl font-bold" style="color: #003366;">₱0</span>
                  <span class="text-base-content/60">/month</span>
                </div>
                <p class="text-xs text-base-content/50">Free forever</p>
              </div>
              <ul class="space-y-3 mb-6">
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Up to 3 accounts</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Basic transfers</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Email support</span>
                </li>
                <li class="feature-item feature-disabled">
                  <svg class="w-5 h-5 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <button class="btn-outline-action w-full">Get Started</button>
            </div>
          </div>

          <!-- Professional Plan - Featured -->
          <div class="pricing-card-featured">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class="badge badge-sm" style="background: linear-gradient(135deg, #E94B35 0%, #FF6B54 100%); border: none; color: white; padding: 0.5rem 1rem;">MOST POPULAR</div>
            </div>
            <div class="card-body">
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold mb-2">Professional</h3>
                <p class="text-xs text-base-content/60 mb-4">For businesses</p>
                <div class="mb-2">
                  <span class="text-4xl font-bold" style="color: #003366;">₱499</span>
                  <span class="text-base-content/60">/month</span>
                </div>
                <p class="text-xs" style="color: #36D399;">Save ₱1,000/year</p>
              </div>
              <ul class="space-y-3 mb-6">
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Unlimited accounts</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Instant transfers</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Priority 24/7 support</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <button class="btn-action w-full">Subscribe Now</button>
            </div>
          </div>

          <!-- Enterprise Plan -->
          <div class="pricing-card">
            <div class="card-body">
              <div class="text-center mb-6">
                <h3 class="text-lg font-bold mb-2">Enterprise</h3>
                <p class="text-xs text-base-content/60 mb-4">For large organizations</p>
                <div class="mb-2">
                  <span class="text-4xl font-bold" style="color: #003366;">Custom</span>
                </div>
                <p class="text-xs text-base-content/50">Contact us for pricing</p>
              </div>
              <ul class="space-y-3 mb-6">
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li class="feature-item">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <button class="btn-outline-action w-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Profile & Team Cards -->
    <ComponentPreview
      title="Profile & Team Cards"
      description="Cards for displaying user profiles and team members."
      :code="profileCardCode"
      language="html"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Profile Card 1 -->
          <div class="profile-card group">
            <div class="card-body text-center">
              <div class="avatar-container mx-auto mb-4">
                <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style="background: linear-gradient(135deg, #003366 0%, #0C3558 100%);">
                  JD
                </div>
                <div class="status-badge status-online"></div>
              </div>
              <h3 class="font-bold text-lg mb-1">Juan Dela Cruz</h3>
              <p class="text-xs text-base-content/60 mb-3">Account Manager</p>
              <div class="flex gap-2 justify-center mb-4">
                <div class="badge badge-sm" style="background-color: #003366; border: none; color: white;">Premium</div>
                <div class="badge badge-sm badge-ghost">Verified</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Profile Card 2 -->
          <div class="profile-card group">
            <div class="card-body text-center">
              <div class="avatar-container mx-auto mb-4">
                <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style="background: linear-gradient(135deg, #E94B35 0%, #FF6B54 100%);">
                  MS
                </div>
                <div class="status-badge status-away"></div>
              </div>
              <h3 class="font-bold text-lg mb-1">Maria Santos</h3>
              <p class="text-xs text-base-content/60 mb-3">Branch Manager</p>
              <div class="flex gap-2 justify-center mb-4">
                <div class="badge badge-sm" style="background-color: #E94B35; border: none; color: white;">VIP</div>
                <div class="badge badge-sm badge-ghost">Verified</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Profile Card 3 -->
          <div class="profile-card group">
            <div class="card-body text-center">
              <div class="avatar-container mx-auto mb-4">
                <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style="background: linear-gradient(135deg, #36D399 0%, #22C55E 100%);">
                  PR
                </div>
                <div class="status-badge status-online"></div>
              </div>
              <h3 class="font-bold text-lg mb-1">Pedro Reyes</h3>
              <p class="text-xs text-base-content/60 mb-3">Customer Support</p>
              <div class="flex gap-2 justify-center mb-4">
                <div class="badge badge-sm badge-success">Active</div>
                <div class="badge badge-sm badge-ghost">Verified</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Profile Card 4 -->
          <div class="profile-card group">
            <div class="card-body text-center">
              <div class="avatar-container mx-auto mb-4">
                <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style="background: linear-gradient(135deg, #FBBD23 0%, #F59E0B 100%);">
                  AL
                </div>
                <div class="status-badge status-offline"></div>
              </div>
              <h3 class="font-bold text-lg mb-1">Ana Lopez</h3>
              <p class="text-xs text-base-content/60 mb-3">Financial Advisor</p>
              <div class="flex gap-2 justify-center mb-4">
                <div class="badge badge-sm badge-warning">Busy</div>
                <div class="badge badge-sm badge-ghost">Verified</div>
              </div>
              <div class="flex gap-2">
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </button>
                <button class="btn-icon group-hover:scale-110 transition-transform">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Stat Cards with Advanced Metrics -->
    <ComponentPreview
      title="Statistics & Metrics Cards"
      description="Advanced metric cards with trend indicators and sparklines."
      :code="statCardCode"
      language="html"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Total Balance Stat -->
          <div class="stat-card group">
            <div class="card-body">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon" style="background: linear-gradient(135deg, #003366 0%, #0C3558 100%);">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="trend-badge trend-up">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                  </svg>
                  <span>12.5%</span>
                </div>
              </div>
              <div>
                <p class="text-xs text-base-content/60 mb-1">Total Balance</p>
                <p class="text-3xl font-bold mb-2" style="color: #003366;">₱462,770</p>
                <p class="text-xs text-base-content/50">+₱51,230 from last month</p>
              </div>
            </div>
          </div>

          <!-- Transactions Stat -->
          <div class="stat-card group">
            <div class="card-body">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon" style="background: linear-gradient(135deg, #E94B35 0%, #FF6B54 100%);">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                </div>
                <div class="trend-badge trend-up">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                  </svg>
                  <span>8.2%</span>
                </div>
              </div>
              <div>
                <p class="text-xs text-base-content/60 mb-1">Transactions</p>
                <p class="text-3xl font-bold mb-2" style="color: #E94B35;">247</p>
                <p class="text-xs text-base-content/50">This month • Avg: 8/day</p>
              </div>
            </div>
          </div>

          <!-- Savings Goal Stat -->
          <div class="stat-card group">
            <div class="card-body">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon" style="background: linear-gradient(135deg, #36D399 0%, #22C55E 100%);">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="trend-badge trend-neutral">
                  <span>75%</span>
                </div>
              </div>
              <div>
                <p class="text-xs text-base-content/60 mb-1">Savings Goal</p>
                <p class="text-3xl font-bold mb-2 text-success">₱75,000</p>
                <div class="progress-bar-container mt-2">
                  <div class="progress-bar-fill-success" style="width: 75%;"></div>
                </div>
                <p class="text-xs text-base-content/50 mt-2">₱25K more to reach ₱100K goal</p>
              </div>
            </div>
          </div>

          <!-- Pending Actions Stat -->
          <div class="stat-card group">
            <div class="card-body">
              <div class="flex items-start justify-between mb-4">
                <div class="stat-icon" style="background: linear-gradient(135deg, #FBBD23 0%, #F59E0B 100%);">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="trend-badge trend-down">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                  <span>25%</span>
                </div>
              </div>
              <div>
                <p class="text-xs text-base-content/60 mb-1">Pending Actions</p>
                <p class="text-3xl font-bold mb-2 text-warning">3</p>
                <p class="text-xs text-base-content/50">2 transfers • 1 verification</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Alert & Notification Cards -->
    <ComponentPreview
      title="Alert & Notification Cards"
      description="Cards for important alerts, system notifications, and user messages."
      :code="alertCardCode"
      language="html"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Success Alert -->
          <div class="alert-card alert-success">
            <div class="flex items-start gap-4">
              <div class="alert-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-1">Transfer Successful</h3>
                <p class="text-sm opacity-90 mb-3">Your transfer of ₱5,000.00 to Juan Dela Cruz has been completed successfully.</p>
                <div class="flex items-center gap-4 text-xs opacity-75">
                  <span>Reference: TXN123456789</span>
                  <span>•</span>
                  <span>Jan 15, 2025 10:30 AM</span>
                </div>
              </div>
              <button class="btn-sm btn-ghost opacity-50 hover:opacity-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Warning Alert -->
          <div class="alert-card alert-warning">
            <div class="flex items-start gap-4">
              <div class="alert-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-1">Account Verification Required</h3>
                <p class="text-sm opacity-90 mb-3">Please verify your account details to continue using all banking features. This is required for compliance.</p>
                <button class="btn btn-sm" style="background-color: #0C3558; border-color: #082340; color: white;">Verify Now</button>
              </div>
              <button class="btn-sm btn-ghost opacity-50 hover:opacity-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Info Alert -->
          <div class="alert-card alert-info">
            <div class="flex items-start gap-4">
              <div class="alert-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-1">Scheduled System Maintenance</h3>
                <p class="text-sm mb-3">Our internet banking service will undergo scheduled maintenance on Jan 20, 2025 from 12:00 AM to 4:00 AM.</p>
                <p class="text-xs opacity-75">Some services may be temporarily unavailable during this period. We apologize for any inconvenience.</p>
              </div>
              <button class="btn-sm btn-ghost opacity-50 hover:opacity-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Error Alert -->
          <div class="alert-card alert-error">
            <div class="flex items-start gap-4">
              <div class="alert-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg mb-1">Transaction Failed</h3>
                <p class="text-sm opacity-90 mb-3">Your transaction could not be processed due to insufficient funds. Please try again with a lower amount.</p>
                <div class="flex gap-2">
                  <button class="btn btn-sm btn-ghost text-white">Contact Support</button>
                  <button class="btn btn-sm btn-ghost text-white">Retry</button>
                </div>
              </div>
              <button class="btn-sm btn-ghost opacity-50 hover:opacity-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import ComponentPreview from '../components/layout/ComponentPreview.vue'

// Code examples
const premiumCardCode = `<!-- Premium Account Card -->
<div class="card-premium group">
  <div class="card-body text-white relative overflow-hidden">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#0C3558] to-[#003366] opacity-90"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

    <div class="relative z-10">
      <div class="flex justify-between items-start mb-6">
        <div>
          <div class="badge badge-sm mb-2" style="background: rgba(255,255,255,0.2); border: none; color: white;">PLATINUM</div>
          <p class="text-xs opacity-80">Savings Account</p>
          <p class="text-sm font-semibold">****1234</p>
        </div>
        <svg class="w-10 h-10 opacity-40 group-hover:opacity-60 transition-opacity">...</svg>
      </div>
      <div class="mb-6">
        <p class="text-xs opacity-70 mb-1">Available Balance</p>
        <p class="text-3xl font-bold tracking-tight">₱125,450.00</p>
        <p class="text-xs opacity-70 mt-1">+5.2% this month</p>
      </div>
      <div class="flex gap-2">
        <button class="btn-glass flex-1">Transfer</button>
        <button class="btn-glass flex-1">Details</button>
      </div>
    </div>
  </div>
</div>`

const transactionCardCode = `<!-- Transaction Card -->
<div class="transaction-card group">
  <div class="flex items-center gap-4">
    <div class="transaction-icon transaction-icon-sent">
      <svg>...</svg>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1">
        <p class="font-semibold">Money Transfer</p>
        <div class="badge badge-xs badge-ghost">Completed</div>
      </div>
      <p class="text-sm text-base-content/60 truncate">To: Juan Dela Cruz • Account ****8901</p>
      <p class="text-xs text-base-content/50">Jan 15, 2025 • 10:30 AM • Ref: TXN123456789</p>
    </div>
    <div class="text-right flex-shrink-0">
      <p class="font-bold text-lg" style="color: #E94B35;">-₱5,000.00</p>
      <p class="text-xs text-base-content/50">Fee: ₱0.00</p>
    </div>
    <svg class="w-5 h-5 text-base-content/30 group-hover:text-base-content/60">...</svg>
  </div>
</div>`

const pricingCardCode = `<!-- Pricing Card - Featured -->
<div class="pricing-card-featured">
  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div class="badge badge-sm" style="background: linear-gradient(135deg, #E94B35 0%, #FF6B54 100%); border: none; color: white; padding: 0.5rem 1rem;">MOST POPULAR</div>
  </div>
  <div class="card-body">
    <div class="text-center mb-6">
      <h3 class="text-lg font-bold mb-2">Professional</h3>
      <p class="text-xs text-base-content/60 mb-4">For businesses</p>
      <div class="mb-2">
        <span class="text-4xl font-bold" style="color: #003366;">₱499</span>
        <span class="text-base-content/60">/month</span>
      </div>
      <p class="text-xs" style="color: #36D399;">Save ₱1,000/year</p>
    </div>
    <ul class="space-y-3 mb-6">
      <li class="feature-item">
        <svg>...</svg>
        <span>Unlimited accounts</span>
      </li>
      <!-- More features -->
    </ul>
    <button class="btn-action w-full">Subscribe Now</button>
  </div>
</div>`

const profileCardCode = `<!-- Profile Card -->
<div class="profile-card group">
  <div class="card-body text-center">
    <div class="avatar-container mx-auto mb-4">
      <div class="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold" style="background: linear-gradient(135deg, #003366 0%, #0C3558 100%);">
        JD
      </div>
      <div class="status-badge status-online"></div>
    </div>
    <h3 class="font-bold text-lg mb-1">Juan Dela Cruz</h3>
    <p class="text-xs text-base-content/60 mb-3">Account Manager</p>
    <div class="flex gap-2 justify-center mb-4">
      <div class="badge badge-sm" style="background-color: #003366; border: none; color: white;">Premium</div>
      <div class="badge badge-sm badge-ghost">Verified</div>
    </div>
    <div class="flex gap-2">
      <button class="btn-icon group-hover:scale-110 transition-transform">
        <svg>...</svg>
      </button>
      <!-- More action buttons -->
    </div>
  </div>
</div>`

const statCardCode = `<!-- Statistics Card -->
<div class="stat-card group">
  <div class="card-body">
    <div class="flex items-start justify-between mb-4">
      <div class="stat-icon" style="background: linear-gradient(135deg, #003366 0%, #0C3558 100%);">
        <svg class="w-6 h-6 text-white">...</svg>
      </div>
      <div class="trend-badge trend-up">
        <svg>...</svg>
        <span>12.5%</span>
      </div>
    </div>
    <div>
      <p class="text-xs text-base-content/60 mb-1">Total Balance</p>
      <p class="text-3xl font-bold mb-2" style="color: #003366;">₱462,770</p>
      <p class="text-xs text-base-content/50">+₱51,230 from last month</p>
    </div>
  </div>
</div>`

const alertCardCode = `<!-- Alert Card - Success -->
<div class="alert-card alert-success">
  <div class="flex items-start gap-4">
    <div class="alert-icon">
      <svg class="w-6 h-6">...</svg>
    </div>
    <div class="flex-1">
      <h3 class="font-bold text-lg mb-1">Transfer Successful</h3>
      <p class="text-sm opacity-90 mb-3">Your transfer of ₱5,000.00 to Juan Dela Cruz has been completed successfully.</p>
      <div class="flex items-center gap-4 text-xs opacity-75">
        <span>Reference: TXN123456789</span>
        <span>•</span>
        <span>Jan 15, 2025 10:30 AM</span>
      </div>
    </div>
    <button class="btn-sm btn-ghost opacity-50 hover:opacity-100">
      <svg>...</svg>
    </button>
  </div>
</div>`
</script>

<style scoped>
/* Premium Cards with Glassmorphism */
.card-premium {
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  cursor: pointer;
  transition: all 500ms ease-out;
  background-color: #003366;
}

.card-premium:hover {
  box-shadow: 0 20px 60px -15px rgba(0, 51, 102, 0.4);
  transform: scale(1.02);
}

.card-premium-border {
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 500ms ease-out;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #003366, #E94B35) border-box;
}

.card-premium-border:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.02);
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #E94B35, #003366) border-box;
}

/* Glassmorphism Buttons */
.btn-glass {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 300ms;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

/* Action Buttons */
.btn-action {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  transition: all 300ms;
  background: linear-gradient(135deg, #003366 0%, #0C3558 100%);
}

.btn-action:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.btn-outline-action {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid #003366;
  color: #003366;
  transition: all 300ms;
}

.btn-outline-action:hover {
  background-color: #003366;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

/* Hover Cards */
.card-hover {
  transition: all 300ms ease-out;
  border: 2px solid #E5E5E5;
  border-radius: 1rem;
}

.card-hover:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.02) translateY(-0.25rem);
}

/* Progress Bar */
.progress-bar-container {
  width: 100%;
  height: 0.5rem;
  background-color: #E5E5E5;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 9999px;
  transition: all 1000ms ease-out;
  background: linear-gradient(90deg, #36D399 0%, #22C55E 100%);
}

.progress-bar-fill-success {
  height: 100%;
  border-radius: 9999px;
  transition: all 1000ms ease-out;
  background: linear-gradient(90deg, #36D399 0%, #22C55E 100%);
}

/* Transaction Cards */
.transaction-card {
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-out;
  cursor: pointer;
}

.transaction-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: scale(1.01);
}

.transaction-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 300ms;
}

.transaction-card:hover .transaction-icon {
  transform: scale(1.1);
}

.transaction-icon-sent {
  background: linear-gradient(135deg, rgba(233, 75, 53, 0.1) 0%, rgba(255, 107, 84, 0.1) 100%);
  color: #E94B35;
}

.transaction-icon-received {
  background: linear-gradient(135deg, rgba(54, 211, 153, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%);
  color: #36D399;
}

.transaction-icon-bill {
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.1) 0%, rgba(12, 53, 88, 0.1) 100%);
  color: #003366;
}

/* Pricing Cards */
.pricing-card {
  transition: all 300ms ease-out;
  border: 2px solid transparent;
}

.pricing-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
  border-color: #003366;
}

.pricing-card-featured {
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-out;
  border: 2px solid #E94B35;
  background: linear-gradient(135deg, #003366 0%, #0C3558 100%);
  color: white;
}

.pricing-card-featured:hover {
  transform: scale(1.05);
}

.pricing-card-featured .card-body {
  position: relative;
  z-index: 10;
}

/* Feature Items */
.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.feature-disabled {
  opacity: 0.4;
}

/* Profile Cards */
.profile-card {
  transition: all 300ms ease-out;
}

.profile-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.avatar-container {
  position: relative;
}

.status-badge {
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  border: 2px solid white;
}

.status-online {
  background-color: #36D399;
}

.status-away {
  background-color: #FBBD23;
}

.status-offline {
  background-color: #E5E5E5;
}

.btn-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  transition: all 200ms;
  color: #003366;
}

.btn-icon:hover {
  background-color: #E5E5E5;
}

/* Stat Cards */
.stat-card {
  transition: all 300ms ease-out;
}

.stat-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05) translateY(-0.25rem);
}

.stat-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.trend-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.trend-up {
  background-color: rgba(54, 211, 153, 0.1);
  color: #36D399;
}

.trend-down {
  background-color: rgba(248, 114, 114, 0.1);
  color: #F87272;
}

.trend-neutral {
  background-color: #E5E5E5;
  color: #3D4451;
}

/* Alert Cards */
.alert-card {
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-out;
}

.alert-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.alert-success {
  background-color: #36D399;
  color: white;
}

.alert-warning {
  background-color: #FBBD23;
  color: #3D4451;
}

.alert-info {
  border: 2px solid #003366;
  background-color: #F0F9FF;
  color: #003366;
}

.alert-error {
  background-color: #F87272;
  color: white;
}

.alert-icon {
  flex-shrink: 0;
}
</style>
