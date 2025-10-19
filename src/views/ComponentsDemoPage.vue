<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Components Demo</h1>
    <p class="body-large text-base-content/70 mb-12">
      Real-world banking components demonstrating how all UI elements work together in Corporate Internet Banking.
    </p>

    <!-- Account Dashboard Cards -->
    <ComponentPreview
      title="Account Dashboard Cards"
      description="Account summary cards displaying balance, account type, and quick actions."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Savings Account -->
          <div class="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-xl">
            <div class="card-body">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm opacity-80">Savings Account</p>
                  <h2 class="card-title text-3xl mt-2">₱125,450.00</h2>
                  <p class="text-xs opacity-60 mt-1">****1234</p>
                </div>
                <svg class="w-8 h-8 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </div>
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-ghost text-white">Transfer</button>
                <button class="btn btn-sm btn-ghost text-white">Details</button>
              </div>
            </div>
          </div>

          <!-- Checking Account -->
          <div class="card bg-base-100 border-2 border-primary shadow-xl">
            <div class="card-body">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm text-base-content/60">Checking Account</p>
                  <h2 class="card-title text-3xl mt-2">₱78,920.00</h2>
                  <p class="text-xs text-base-content/40 mt-1">****5678</p>
                </div>
                <svg class="w-8 h-8 text-primary opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-primary">Transfer</button>
                <button class="btn btn-sm btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>

          <!-- Add Account Card -->
          <div class="card bg-base-200 border-2 border-dashed border-base-300 hover:border-primary shadow-xl cursor-pointer transition-all">
            <div class="card-body items-center justify-center">
              <svg class="w-12 h-12 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              <h3 class="text-lg font-semibold mt-2">Add Account</h3>
              <p class="text-sm text-base-content/60 text-center">Link a new bank account</p>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="accountCardsCode" />
      </template>
    </ComponentPreview>

    <!-- Transaction List -->
    <ComponentPreview
      title="Recent Transactions"
      description="Transaction history with status badges and actions."
    >
      <template #preview>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex justify-between items-center mb-4">
              <h2 class="card-title">Recent Transactions</h2>
              <button class="btn btn-sm btn-ghost">View All</button>
            </div>
            <div class="overflow-x-auto">
              <table class="table">
                <tbody>
                  <tr class="hover">
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                          <div class="bg-success text-success-content rounded-full w-10 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                            </svg>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="font-bold relative inline-block pr-20">
                            Salary Deposit
                            <span class="badge badge-success badge-xs absolute -top-1 left-full ml-2">Completed</span>
                          </div>
                          <div class="text-sm opacity-50">Jan 15, 2024 • 9:30 AM</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">
                      <div class="font-bold text-success">+₱45,000.00</div>
                      <div class="text-sm opacity-50">REF-001</div>
                    </td>
                  </tr>
                  <tr class="hover">
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                          <div class="bg-error text-error-content rounded-full w-10 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"/>
                            </svg>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="font-bold relative inline-block pr-20">
                            Utility Payment
                            <span class="badge badge-success badge-xs absolute -top-1 left-full ml-2">Completed</span>
                          </div>
                          <div class="text-sm opacity-50">Jan 14, 2024 • 3:45 PM</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-right w-48">
                      <div class="font-bold text-error">-₱2,500.00</div>
                      <div class="text-sm opacity-50">REF-002</div>
                    </td>
                  </tr>
                  <tr class="hover">
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                          <div class="bg-warning text-warning-content rounded-full w-10 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                        </div>
                        <div class="flex-1">
                          <div class="font-bold relative inline-block pr-20">
                            Fund Transfer
                            <span class="badge badge-warning badge-xs absolute -top-1 left-full ml-2">Pending</span>
                          </div>
                          <div class="text-sm opacity-50">Jan 14, 2024 • 1:20 PM</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-right w-48">
                      <div class="font-bold">-₱10,000.00</div>
                      <div class="text-sm opacity-50">REF-003</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="transactionListCode" />
      </template>
    </ComponentPreview>

    <!-- Quick Transfer Widget -->
    <ComponentPreview
      title="Quick Transfer Widget"
      description="Simplified transfer form with beneficiary selection."
    >
      <template #preview>
        <div class="card bg-base-100 shadow-xl max-w-2xl">
          <div class="card-body">
            <h2 class="card-title mb-4">Quick Transfer</h2>

            <!-- Beneficiary Selection -->
            <div class="mb-4">
              <label class="label">
                <span class="label-text">To Beneficiary</span>
              </label>
              <div class="flex gap-2 overflow-x-auto pb-2">
                <div class="card card-compact bg-primary text-primary-content w-32 cursor-pointer flex-shrink-0">
                  <div class="card-body items-center">
                    <div class="avatar placeholder">
                      <div class="bg-primary-content text-primary rounded-full w-12 flex items-center justify-center">
                        <span class="text-lg">JD</span>
                      </div>
                    </div>
                    <p class="text-sm font-semibold whitespace-nowrap">John Doe</p>
                    <p class="text-xs opacity-80">****1234</p>
                  </div>
                </div>
                <div class="card card-compact bg-base-200 w-32 cursor-pointer flex-shrink-0">
                  <div class="card-body items-center">
                    <div class="avatar placeholder">
                      <div class="bg-neutral text-neutral-content rounded-full w-12 flex items-center justify-center">
                        <span class="text-lg">MS</span>
                      </div>
                    </div>
                    <p class="text-sm font-semibold whitespace-nowrap">Maria Santos</p>
                    <p class="text-xs opacity-60">****5678</p>
                  </div>
                </div>
                <div class="card card-compact bg-base-200 w-32 cursor-pointer flex-shrink-0">
                  <div class="card-body items-center">
                    <div class="avatar placeholder">
                      <div class="bg-neutral text-neutral-content rounded-full w-12 flex items-center justify-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                      </div>
                    </div>
                    <p class="text-sm font-semibold">Add New</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Amount Input -->
            <div class="form-control w-full mb-4">
              <label class="label">
                <span class="label-text">Amount</span>
                <span class="label-text-alt">Available: ₱125,450.00</span>
              </label>
              <label class="input-group">
                <span>₱</span>
                <input type="number" placeholder="0.00" class="input input-bordered w-full" />
              </label>
            </div>

            <!-- Notes -->
            <div class="form-control w-full mb-4">
              <label class="label">
                <span class="label-text">Notes (Optional)</span>
              </label>
              <input type="text" placeholder="Add a note" class="input input-bordered w-full" />
            </div>

            <div class="card-actions justify-end">
              <button class="btn btn-ghost">Cancel</button>
              <button class="btn btn-primary">Transfer Now</button>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="quickTransferCode" />
      </template>
    </ComponentPreview>

    <!-- Statistics Cards -->
    <ComponentPreview
      title="Statistics Overview"
      description="Financial statistics and spending insights."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-primary">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div class="stat-title">Total Income</div>
              <div class="stat-value text-primary">₱89.4K</div>
              <div class="stat-desc">Jan 1 - Jan 15</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-error">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
                </svg>
              </div>
              <div class="stat-title">Total Expenses</div>
              <div class="stat-value text-error">₱45.2K</div>
              <div class="stat-desc">↗︎ 12% from last month</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-success">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="stat-title">Savings</div>
              <div class="stat-value text-success">₱44.2K</div>
              <div class="stat-desc">↗︎ 22% from last month</div>
            </div>
          </div>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-info">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div class="stat-title">Transactions</div>
              <div class="stat-value text-info">156</div>
              <div class="stat-desc">This month</div>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="statisticsCode" />
      </template>
    </ComponentPreview>

    <!-- Notification Center -->
    <ComponentPreview
      title="Notification Center"
      description="Recent alerts and system notifications."
    >
      <template #preview>
        <div class="card bg-base-100 shadow-xl max-w-md">
          <div class="card-body">
            <div class="flex justify-between items-center mb-4">
              <h2 class="card-title">Notifications</h2>
              <div class="badge badge-primary">3 New</div>
            </div>
            <div class="space-y-3">
              <div class="flex gap-3 p-3 bg-primary/10 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
                <div class="flex-shrink-0">
                  <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-sm">Transfer Completed</p>
                  <p class="text-xs text-base-content/60">Your transfer of ₱10,000 to John Doe has been completed.</p>
                  <p class="text-xs text-base-content/40 mt-1">2 minutes ago</p>
                </div>
              </div>

              <div class="flex gap-3 p-3 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-colors">
                <div class="flex-shrink-0">
                  <div class="w-2 h-2 bg-base-300 rounded-full mt-2"></div>
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-sm">Security Alert</p>
                  <p class="text-xs text-base-content/60">New login detected from Chrome on Windows.</p>
                  <p class="text-xs text-base-content/40 mt-1">1 hour ago</p>
                </div>
              </div>

              <div class="flex gap-3 p-3 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-colors">
                <div class="flex-shrink-0">
                  <div class="w-2 h-2 bg-base-300 rounded-full mt-2"></div>
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-sm">Bill Reminder</p>
                  <p class="text-xs text-base-content/60">Your electricity bill is due in 3 days.</p>
                  <p class="text-xs text-base-content/40 mt-1">Yesterday</p>
                </div>
              </div>
            </div>
            <div class="card-actions justify-center mt-4">
              <button class="btn btn-sm btn-ghost">View All Notifications</button>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="notificationCode" />
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import ComponentPreview from '../components/layout/ComponentPreview.vue'
import CodeBlock from '../components/layout/CodeBlock.vue'

const accountCardsCode = `<!-- Account Dashboard Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Primary Account Card -->
  <div class="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-xl">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm opacity-80">Savings Account</p>
          <h2 class="card-title text-3xl mt-2">₱125,450.00</h2>
          <p class="text-xs opacity-60 mt-1">****1234</p>
        </div>
        <svg class="w-8 h-8 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      </div>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-sm btn-ghost text-white">Transfer</button>
        <button class="btn btn-sm btn-ghost text-white">Details</button>
      </div>
    </div>
  </div>

  <!-- Secondary Account Card -->
  <div class="card bg-base-100 border-2 border-primary shadow-xl">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-base-content/60">Checking Account</p>
          <h2 class="card-title text-3xl mt-2">₱78,920.00</h2>
          <p class="text-xs text-base-content/40 mt-1">****5678</p>
        </div>
        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </div>
      <div class="card-actions justify-end mt-4">
        <button class="btn btn-sm btn-primary">Transfer</button>
        <button class="btn btn-sm btn-outline btn-primary">Details</button>
      </div>
    </div>
  </div>
</div>`

const transactionListCode = `<!-- Transaction List -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title mb-4">Recent Transactions</h2>
    <div class="overflow-x-auto">
      <table class="table">
        <tbody>
          <tr class="hover">
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-success text-success-content rounded-full w-10 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="font-bold relative inline-block pr-20">
                    Salary Deposit
                    <span class="badge badge-success badge-xs absolute -top-1 left-full ml-2">Completed</span>
                  </div>
                  <div class="text-sm opacity-50">Jan 15, 2024 • 9:30 AM</div>
                </div>
              </div>
            </td>
            <td class="text-right w-48">
              <div class="font-bold text-success">+₱45,000.00</div>
              <div class="text-sm opacity-50">REF-001</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`

const quickTransferCode = `<!-- Quick Transfer Widget -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title mb-4">Quick Transfer</h2>

    <!-- Beneficiary Selection -->
    <div class="flex gap-2 overflow-x-auto pb-2 mb-4">
      <div class="card card-compact bg-primary text-primary-content w-32">
        <div class="card-body items-center">
          <div class="avatar placeholder">
            <div class="bg-primary-content text-primary rounded-full w-12 flex items-center justify-center">
              <span class="text-lg">JD</span>
            </div>
          </div>
          <p class="text-sm font-semibold">John Doe</p>
          <p class="text-xs">****1234</p>
        </div>
      </div>
    </div>

    <!-- Amount Input -->
    <div class="form-control w-full mb-4">
      <label class="label">
        <span class="label-text">Amount</span>
      </label>
      <label class="input-group">
        <span>₱</span>
        <input type="number" class="input input-bordered w-full" />
      </label>
    </div>

    <div class="card-actions justify-end">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Transfer Now</button>
    </div>
  </div>
</div>`

const statisticsCode = `<!-- Statistics Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-figure text-primary">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      </div>
      <div class="stat-title">Total Income</div>
      <div class="stat-value text-primary">₱89.4K</div>
      <div class="stat-desc">Jan 1 - Jan 15</div>
    </div>
  </div>

  <div class="stats shadow">
    <div class="stat">
      <div class="stat-figure text-error">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
        </svg>
      </div>
      <div class="stat-title">Total Expenses</div>
      <div class="stat-value text-error">₱45.2K</div>
      <div class="stat-desc">↗︎ 12% from last month</div>
    </div>
  </div>
</div>`

const notificationCode = `<!-- Notification Center -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <div class="flex justify-between items-center mb-4">
      <h2 class="card-title">Notifications</h2>
      <div class="badge badge-primary">3 New</div>
    </div>
    <div class="space-y-3">
      <div class="flex gap-3 p-3 bg-primary/10 rounded-lg">
        <div class="flex-shrink-0">
          <div class="w-2 h-2 bg-primary rounded-full mt-2"></div>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-sm">Transfer Completed</p>
          <p class="text-xs text-base-content/60">Your transfer has been completed.</p>
          <p class="text-xs text-base-content/40 mt-1">2 minutes ago</p>
        </div>
      </div>
    </div>
  </div>
</div>`
</script>
