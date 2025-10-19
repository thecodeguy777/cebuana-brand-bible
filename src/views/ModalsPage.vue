<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Modals & Dialogs</h1>
    <p class="body-large text-base-content/70 mb-12">
      System messages, alerts, error prompts, and confirmation dialogs for Corporate Internet Banking.
    </p>

    <!-- Two-Button Modals -->
    <ComponentPreview
      title="Two-Button Modal (Confirmation)"
      description="Standard confirmation dialog with two action buttons - Cancel and Confirm."
    >
      <template #preview>
        <button class="btn btn-primary" onclick="modal_confirm.showModal()">Open Confirmation Modal</button>

        <dialog id="modal_confirm" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-4">Confirm Transaction</h3>
            <p class="py-4">Are you sure you want to transfer ₱10,000.00 to Account ****5678?</p>
            <p class="text-sm text-base-content/60 mb-4">This action cannot be undone.</p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-ghost mr-2">Cancel</button>
                <button class="btn btn-primary">Confirm Transfer</button>
              </form>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </template>

      <template #code>
        <CodeBlock language="html" :code="twoButtonModalCode" />
      </template>
    </ComponentPreview>

    <!-- Single-Button Modal -->
    <ComponentPreview
      title="Single-Button Modal (Alert/Info)"
      description="Information or alert dialog with single action button."
    >
      <template #preview>
        <button class="btn btn-info" onclick="modal_alert.showModal()">Open Alert Modal</button>

        <dialog id="modal_alert" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-4">Transaction Successful</h3>
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="mb-2">Your transfer of ₱10,000.00 has been completed successfully.</p>
                <p class="text-sm text-base-content/60">Reference Number: REF-20240115-001</p>
              </div>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-primary">OK</button>
              </form>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </template>

      <template #code>
        <CodeBlock language="html" :code="singleButtonModalCode" />
      </template>
    </ComponentPreview>

    <!-- Error Modal -->
    <ComponentPreview
      title="Error Modal"
      description="Error message dialog for failed operations."
    >
      <template #preview>
        <button class="btn btn-error" onclick="modal_error.showModal()">Open Error Modal</button>

        <dialog id="modal_error" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-4 text-error">Transaction Failed</h3>
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="mb-2">Your transaction could not be completed.</p>
                <p class="text-sm text-base-content/60 mb-2">Error: Insufficient funds in account.</p>
                <p class="text-sm text-base-content/60">Please try again or contact support.</p>
              </div>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-error">Close</button>
              </form>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </template>

      <template #code>
        <CodeBlock language="html" :code="errorModalCode" />
      </template>
    </ComponentPreview>

    <!-- Warning Modal -->
    <ComponentPreview
      title="Warning Modal"
      description="Warning dialog for actions that require user attention."
    >
      <template #preview>
        <button class="btn btn-warning" onclick="modal_warning.showModal()">Open Warning Modal</button>

        <dialog id="modal_warning" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-4">Important Notice</h3>
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-warning flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <div>
                <p class="mb-2">This transaction exceeds your daily limit of ₱50,000.00.</p>
                <p class="text-sm text-base-content/60">You can proceed, but it will require additional verification.</p>
              </div>
            </div>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-ghost mr-2">Cancel</button>
                <button class="btn btn-warning">Proceed with Verification</button>
              </form>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </template>

      <template #code>
        <CodeBlock language="html" :code="warningModalCode" />
      </template>
    </ComponentPreview>

    <!-- Inline Alerts -->
    <ComponentPreview
      title="Inline Alerts"
      description="Non-modal alert messages that appear inline on the page."
    >
      <template #preview>
        <div class="space-y-4">
          <div class="alert alert-success">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Your transaction has been completed successfully!</span>
          </div>

          <div class="alert alert-warning">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <span>Please verify your email address to continue.</span>
          </div>

          <div class="alert alert-error">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Error: Invalid credentials. Please try again.</span>
          </div>

          <div class="alert alert-info">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Your session will expire in 5 minutes.</span>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="inlineAlertCode" />
      </template>
    </ComponentPreview>

    <!-- Toast Notifications -->
    <ComponentPreview
      title="Toast Notifications"
      description="Temporary notifications that appear and auto-dismiss."
    >
      <template #preview>
        <div class="flex gap-2 flex-wrap">
          <button class="btn btn-sm btn-success" @click="showToast('success')">Success Toast</button>
          <button class="btn btn-sm btn-error" @click="showToast('error')">Error Toast</button>
          <button class="btn btn-sm btn-info" @click="showToast('info')">Info Toast</button>
        </div>

        <div v-if="activeToast" class="toast toast-top toast-end">
          <div :class="`alert alert-${activeToast}`">
            <span>{{ toastMessages[activeToast] }}</span>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="toastCode" />
      </template>
    </ComponentPreview>

    <!-- Form Modal -->
    <ComponentPreview
      title="Form Modal"
      description="Modal containing a form for data input."
    >
      <template #preview>
        <button class="btn btn-primary" onclick="modal_form.showModal()">Add Beneficiary</button>

        <dialog id="modal_form" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg mb-4">Add New Beneficiary</h3>
            <form method="dialog">
              <div class="form-control w-full mb-4">
                <label class="label">
                  <span class="label-text">Account Name</span>
                </label>
                <input type="text" placeholder="Enter beneficiary name" class="input input-bordered w-full" />
              </div>
              <div class="form-control w-full mb-4">
                <label class="label">
                  <span class="label-text">Account Number</span>
                </label>
                <input type="text" placeholder="Enter account number" class="input input-bordered w-full" />
              </div>
              <div class="form-control w-full mb-4">
                <label class="label">
                  <span class="label-text">Bank</span>
                </label>
                <select class="select select-bordered w-full">
                  <option disabled selected>Select bank</option>
                  <option>Cebuana Lhuillier Rural Bank</option>
                  <option>BDO</option>
                  <option>BPI</option>
                  <option>Metrobank</option>
                </select>
              </div>
              <div class="modal-action">
                <button type="button" class="btn btn-ghost">Cancel</button>
                <button type="submit" class="btn btn-primary">Add Beneficiary</button>
              </div>
            </form>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </template>

      <template #code>
        <CodeBlock language="html" :code="formModalCode" />
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentPreview from '../components/layout/ComponentPreview.vue'
import CodeBlock from '../components/layout/CodeBlock.vue'

const activeToast = ref(null)
const toastMessages = {
  success: 'Operation completed successfully!',
  error: 'An error occurred. Please try again.',
  info: 'Your session has been extended.'
}

const showToast = (type) => {
  activeToast.value = type
  setTimeout(() => {
    activeToast.value = null
  }, 3000)
}

const twoButtonModalCode = `<!-- Two-Button Confirmation Modal -->
<button class="btn btn-primary" onclick="modal_confirm.showModal()">Open Modal</button>

<dialog id="modal_confirm" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-4">Confirm Transaction</h3>
    <p class="py-4">Are you sure you want to transfer ₱10,000.00 to Account ****5678?</p>
    <p class="text-sm text-base-content/60 mb-4">This action cannot be undone.</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-ghost mr-2">Cancel</button>
        <button class="btn btn-primary">Confirm Transfer</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`

const singleButtonModalCode = `<!-- Single-Button Alert Modal -->
<button class="btn btn-info" onclick="modal_alert.showModal()">Open Modal</button>

<dialog id="modal_alert" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-4">Transaction Successful</h3>
    <div class="flex items-start gap-3 mb-4">
      <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <div>
        <p class="mb-2">Your transfer has been completed successfully.</p>
        <p class="text-sm text-base-content/60">Reference: REF-20240115-001</p>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-primary">OK</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`

const errorModalCode = `<!-- Error Modal -->
<button class="btn btn-error" onclick="modal_error.showModal()">Open Modal</button>

<dialog id="modal_error" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-4 text-error">Transaction Failed</h3>
    <div class="flex items-start gap-3 mb-4">
      <svg class="w-6 h-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <div>
        <p class="mb-2">Your transaction could not be completed.</p>
        <p class="text-sm text-base-content/60">Error: Insufficient funds.</p>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-error">Close</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`

const warningModalCode = `<!-- Warning Modal -->
<button class="btn btn-warning" onclick="modal_warning.showModal()">Open Modal</button>

<dialog id="modal_warning" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-4">Important Notice</h3>
    <div class="flex items-start gap-3 mb-4">
      <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
      <div>
        <p class="mb-2">This transaction exceeds your daily limit.</p>
        <p class="text-sm text-base-content/60">Additional verification required.</p>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-ghost mr-2">Cancel</button>
        <button class="btn btn-warning">Proceed</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`

const inlineAlertCode = `<!-- Inline Alerts -->
<div class="alert alert-success">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <span>Your transaction has been completed successfully!</span>
</div>

<div class="alert alert-warning">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
  </svg>
  <span>Please verify your email address to continue.</span>
</div>

<div class="alert alert-error">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <span>Error: Invalid credentials. Please try again.</span>
</div>

<div class="alert alert-info">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <span>Your session will expire in 5 minutes.</span>
</div>`

const toastCode = `<!-- Toast Notification -->
<div class="toast toast-top toast-end">
  <div class="alert alert-success">
    <span>Operation completed successfully!</span>
  </div>
</div>

<!-- JavaScript to show/hide toast -->
<script>
function showToast(message, type = 'success') {
  const toast = document.querySelector('.toast')
  toast.innerHTML = \`
    <div class="alert alert-\${type}">
      <span>\${message}</span>
    </div>
  \`
  setTimeout(() => {
    toast.innerHTML = ''
  }, 3000)
}
<\/script>`

const formModalCode = `<!-- Form Modal -->
<button class="btn btn-primary" onclick="modal_form.showModal()">Add Beneficiary</button>

<dialog id="modal_form" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg mb-4">Add New Beneficiary</h3>
    <form method="dialog">
      <div class="form-control w-full mb-4">
        <label class="label">
          <span class="label-text">Account Name</span>
        </label>
        <input type="text" placeholder="Enter name" class="input input-bordered w-full" />
      </div>
      <div class="form-control w-full mb-4">
        <label class="label">
          <span class="label-text">Account Number</span>
        </label>
        <input type="text" placeholder="Enter number" class="input input-bordered w-full" />
      </div>
      <div class="modal-action">
        <button type="button" class="btn btn-ghost">Cancel</button>
        <button type="submit" class="btn btn-primary">Add Beneficiary</button>
      </div>
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`
</script>
