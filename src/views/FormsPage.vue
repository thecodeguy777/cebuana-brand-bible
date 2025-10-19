<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Forms & Lists</h1>
    <p class="body-large text-base-content/70 mb-12">
      Standard form inputs, selects, and data table layouts with pagination for Corporate Internet Banking.
    </p>

    <!-- Text Inputs -->
    <ComponentPreview
      title="Text Inputs"
      description="Standard text input fields with labels, placeholders, and validation states."
    >
      <template #preview>
        <div class="space-y-6 max-w-md">
          <!-- Default Input -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Account Number</span>
            </label>
            <input type="text" placeholder="Enter account number" class="input input-bordered w-full" />
          </div>

          <!-- Input with Helper Text -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input type="email" placeholder="email@example.com" class="input input-bordered w-full" />
            <label class="label">
              <span class="label-text-alt">We'll never share your email with anyone else.</span>
            </label>
          </div>

          <!-- Success State -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Valid Input</span>
            </label>
            <input type="text" placeholder="Validated input" class="input input-bordered input-success w-full" value="Verified" />
            <label class="label">
              <span class="label-text-alt text-success">Input validated successfully</span>
            </label>
          </div>

          <!-- Error State -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Invalid Input</span>
            </label>
            <input type="text" placeholder="Invalid input" class="input input-bordered input-error w-full" value="123" />
            <label class="label">
              <span class="label-text-alt text-error">Please enter a valid value</span>
            </label>
          </div>

          <!-- Disabled State -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Disabled Input</span>
            </label>
            <input type="text" placeholder="Disabled" class="input input-bordered w-full" disabled value="Cannot edit" />
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="textInputCode" />
      </template>
    </ComponentPreview>

    <!-- Selects / Dropdowns -->
    <ComponentPreview
      title="Select Dropdowns"
      description="Dropdown select fields for single and multiple selections."
    >
      <template #preview>
        <div class="space-y-4 max-w-md">
          <!-- Default Select -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Account Type</span>
            </label>
            <select class="select select-bordered w-full">
              <option disabled selected>Select account type</option>
              <option>Savings Account</option>
              <option>Checking Account</option>
              <option>Business Account</option>
              <option>Investment Account</option>
            </select>
          </div>

          <!-- Primary Select -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Transaction Type</span>
            </label>
            <select class="select select-bordered select-primary w-full">
              <option disabled selected>Select transaction</option>
              <option>Deposit</option>
              <option>Withdrawal</option>
              <option>Transfer</option>
              <option>Payment</option>
            </select>
          </div>

          <!-- Disabled Select -->
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Disabled Select</span>
            </label>
            <select class="select select-bordered w-full" disabled>
              <option>Cannot change</option>
            </select>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="selectCode" />
      </template>
    </ComponentPreview>

    <!-- Textarea -->
    <ComponentPreview
      title="Textarea"
      description="Multi-line text input for longer content and descriptions."
    >
      <template #preview>
        <div class="space-y-6 max-w-md">
          <!-- Default Textarea -->
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Transaction Notes</legend>
            <textarea class="textarea textarea-bordered h-24" placeholder="Enter additional notes..."></textarea>
          </fieldset>

          <!-- Primary Textarea -->
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Message</legend>
            <textarea class="textarea textarea-bordered textarea-primary h-24" placeholder="Type your message..."></textarea>
            <div class="label">Maximum 500 characters</div>
          </fieldset>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="textareaCode" />
      </template>
    </ComponentPreview>

    <!-- Checkboxes and Radio Buttons -->
    <ComponentPreview
      title="Checkboxes & Radio Buttons"
      description="Selection controls for forms and settings."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Checkboxes -->
          <div>
            <h4 class="heading-6 mb-4">Checkboxes</h4>
            <div class="space-y-2">
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" checked class="checkbox" />
                  <span class="label-text">Enable notifications</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">Primary checkbox</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" class="checkbox checkbox-accent" />
                  <span class="label-text">Accent checkbox</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" class="checkbox" disabled />
                  <span class="label-text opacity-50">Disabled checkbox</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Radio Buttons -->
          <div>
            <h4 class="heading-6 mb-4">Radio Buttons</h4>
            <div class="space-y-2">
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="radio" name="radio-group" class="radio" checked />
                  <span class="label-text">Default option</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="radio" name="radio-group" class="radio radio-primary" />
                  <span class="label-text">Primary option</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="radio" name="radio-group" class="radio radio-accent" />
                  <span class="label-text">Accent option</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-4">
                  <input type="radio" name="radio-disabled" class="radio" disabled />
                  <span class="label-text opacity-50">Disabled option</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="checkboxRadioCode" />
      </template>
    </ComponentPreview>

    <!-- Toggle Switches -->
    <ComponentPreview
      title="Toggle Switches"
      description="Binary on/off switches for settings and preferences."
    >
      <template #preview>
        <div class="space-y-3 max-w-md">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Enable two-factor authentication</span>
              <input type="checkbox" class="toggle" checked />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Primary toggle</span>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Accent toggle</span>
              <input type="checkbox" class="toggle toggle-accent" />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Success toggle</span>
              <input type="checkbox" class="toggle toggle-success" checked />
            </label>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="toggleCode" />
      </template>
    </ComponentPreview>

    <!-- Complete Form Example -->
    <ComponentPreview
      title="Complete Form Example"
      description="Full form layout with multiple input types and validation."
    >
      <template #preview>
        <form class="card bg-base-100 shadow-xl max-w-2xl">
          <div class="card-body">
            <h3 class="card-title">Transfer Funds</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- From Account -->
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">From Account</span>
                </label>
                <select class="select select-bordered w-full">
                  <option disabled selected>Select account</option>
                  <option>Savings - ****1234 (₱50,000.00)</option>
                  <option>Checking - ****5678 (₱25,000.00)</option>
                </select>
              </div>

              <!-- To Account -->
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">To Account</span>
                </label>
                <input type="text" placeholder="Account number" class="input input-bordered w-full" />
              </div>

              <!-- Amount -->
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Amount</span>
                </label>
                <input type="number" placeholder="0.00" class="input input-bordered w-full" />
              </div>

              <!-- Transfer Type -->
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Transfer Type</span>
                </label>
                <select class="select select-bordered w-full">
                  <option>Instant Transfer</option>
                  <option>Scheduled Transfer</option>
                  <option>Recurring Transfer</option>
                </select>
              </div>
            </div>

            <!-- Reference -->
            <fieldset class="fieldset w-full">
              <legend class="fieldset-legend">Reference/Notes (Optional)</legend>
              <textarea class="textarea textarea-bordered" placeholder="Add reference or notes"></textarea>
            </fieldset>

            <!-- Save Template -->
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-4">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text">Save as template for future transfers</span>
              </label>
            </div>

            <div class="card-actions justify-end mt-4">
              <button type="button" class="btn btn-ghost">Cancel</button>
              <button type="submit" class="btn btn-primary">Transfer Now</button>
            </div>
          </div>
        </form>
      </template>
    </ComponentPreview>

    <!-- Data Tables with Pagination -->
    <ComponentPreview
      title="Data Tables"
      description="Transaction lists and data tables with pagination controls."
    >
      <template #preview>
        <div class="space-y-4">
          <!-- Table -->
          <div class="overflow-x-auto">
            <table class="table table-zebra">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Reference No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-01-15</td>
                  <td>Salary Deposit</td>
                  <td>REF-20240115-001</td>
                  <td class="text-success">+₱45,000.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2024-01-14</td>
                  <td>Utility Payment</td>
                  <td>REF-20240114-002</td>
                  <td class="text-error">-₱2,500.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2024-01-13</td>
                  <td>Online Purchase</td>
                  <td>REF-20240113-003</td>
                  <td class="text-error">-₱1,250.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2024-01-12</td>
                  <td>Fund Transfer</td>
                  <td>REF-20240112-004</td>
                  <td class="text-error">-₱10,000.00</td>
                  <td><span class="badge badge-warning">Pending</span></td>
                </tr>
                <tr>
                  <td>2024-01-11</td>
                  <td>ATM Withdrawal</td>
                  <td>REF-20240111-005</td>
                  <td class="text-error">-₱5,000.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2024-01-10</td>
                  <td>Cash Deposit</td>
                  <td>REF-20240110-006</td>
                  <td class="text-success">+₱15,000.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2024-01-09</td>
                  <td>Bills Payment</td>
                  <td>REF-20240109-007</td>
                  <td class="text-error">-₱3,800.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2024-01-08</td>
                  <td>Online Transfer</td>
                  <td>REF-20240108-008</td>
                  <td class="text-error">-₱7,500.00</td>
                  <td><span class="badge badge-success">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex justify-between items-center">
            <div class="text-sm text-base-content/60">
              Showing 1 to 8 of 156 transactions
            </div>
            <div class="join">
              <button class="join-item btn btn-sm">«</button>
              <button class="join-item btn btn-sm btn-active">1</button>
              <button class="join-item btn btn-sm">2</button>
              <button class="join-item btn btn-sm">3</button>
              <button class="join-item btn btn-sm">4</button>
              <button class="join-item btn btn-sm">»</button>
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="tableCode" />
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import ComponentPreview from '../components/layout/ComponentPreview.vue'
import CodeBlock from '../components/layout/CodeBlock.vue'

const textInputCode = `<!-- Default Text Input -->
<div class="form-control w-full">
  <label class="label">
    <span class="label-text">Account Number</span>
  </label>
  <input type="text" placeholder="Enter account number" class="input input-bordered w-full" />
</div>

<!-- Input with Helper Text -->
<div class="form-control w-full">
  <label class="label">
    <span class="label-text">Email Address</span>
  </label>
  <input type="email" placeholder="email@example.com" class="input input-bordered w-full" />
  <label class="label">
    <span class="label-text-alt">We'll never share your email with anyone else.</span>
  </label>
</div>

<!-- Success State -->
<input type="text" class="input input-bordered input-success w-full" value="Verified" />

<!-- Error State -->
<input type="text" class="input input-bordered input-error w-full" value="123" />

<!-- Disabled State -->
<input type="text" class="input input-bordered w-full" disabled value="Cannot edit" />`

const selectCode = `<!-- Default Select -->
<div class="form-control w-full">
  <label class="label">
    <span class="label-text">Account Type</span>
  </label>
  <select class="select select-bordered w-full">
    <option disabled selected>Select account type</option>
    <option>Savings Account</option>
    <option>Checking Account</option>
    <option>Business Account</option>
    <option>Investment Account</option>
  </select>
</div>

<!-- Primary Select -->
<select class="select select-bordered select-primary w-full">
  <option disabled selected>Select transaction</option>
  <option>Deposit</option>
  <option>Withdrawal</option>
</select>

<!-- Disabled Select -->
<select class="select select-bordered w-full" disabled>
  <option>Cannot change</option>
</select>`

const textareaCode = `<!-- Default Textarea -->
<div class="form-control w-full">
  <label class="label">
    <span class="label-text">Transaction Notes</span>
  </label>
  <textarea class="textarea textarea-bordered h-24" placeholder="Enter additional notes..."></textarea>
</div>

<!-- Primary Textarea with Helper -->
<div class="form-control w-full">
  <label class="label">
    <span class="label-text">Message</span>
  </label>
  <textarea class="textarea textarea-bordered textarea-primary h-24" placeholder="Type your message..."></textarea>
  <label class="label">
    <span class="label-text-alt">Maximum 500 characters</span>
  </label>
</div>`

const checkboxRadioCode = `<!-- Checkboxes -->
<div class="form-control">
  <label class="label cursor-pointer justify-start gap-4">
    <input type="checkbox" checked class="checkbox" />
    <span class="label-text">Enable notifications</span>
  </label>
</div>

<input type="checkbox" class="checkbox checkbox-primary" />
<input type="checkbox" class="checkbox checkbox-accent" />
<input type="checkbox" class="checkbox" disabled />

<!-- Radio Buttons -->
<div class="form-control">
  <label class="label cursor-pointer justify-start gap-4">
    <input type="radio" name="radio-group" class="radio" checked />
    <span class="label-text">Default option</span>
  </label>
</div>

<input type="radio" name="radio-group" class="radio radio-primary" />
<input type="radio" name="radio-group" class="radio radio-accent" />
<input type="radio" name="radio-disabled" class="radio" disabled />`

const toggleCode = `<!-- Toggle Switches -->
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Enable two-factor authentication</span>
    <input type="checkbox" class="toggle" checked />
  </label>
</div>

<input type="checkbox" class="toggle toggle-primary" checked />
<input type="checkbox" class="toggle toggle-accent" />
<input type="checkbox" class="toggle toggle-success" checked />`

const tableCode = `<!-- Data Table with Pagination -->
<div class="overflow-x-auto">
  <table class="table table-zebra">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Reference No.</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2024-01-15</td>
        <td>Salary Deposit</td>
        <td>REF-20240115-001</td>
        <td class="text-success">+₱45,000.00</td>
        <td><span class="badge badge-success">Completed</span></td>
      </tr>
      <tr>
        <td>2024-01-14</td>
        <td>Utility Payment</td>
        <td>REF-20240114-002</td>
        <td class="text-error">-₱2,500.00</td>
        <td><span class="badge badge-success">Completed</span></td>
      </tr>
      <!-- More rows... -->
    </tbody>
  </table>
</div>

<!-- Pagination Controls -->
<div class="flex justify-between items-center">
  <div class="text-sm text-base-content/60">
    Showing 1 to 8 of 156 transactions
  </div>
  <div class="join">
    <button class="join-item btn btn-sm">«</button>
    <button class="join-item btn btn-sm btn-active">1</button>
    <button class="join-item btn btn-sm">2</button>
    <button class="join-item btn btn-sm">3</button>
    <button class="join-item btn btn-sm">4</button>
    <button class="join-item btn btn-sm">»</button>
  </div>
</div>`
</script>
