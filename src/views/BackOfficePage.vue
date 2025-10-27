<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Back Office Login</h1>
    <p class="body-large text-base-content/70 mb-12">
      Enterprise-grade authentication interface for internal back office systems. Designed for security, efficiency, and professional user experience.
    </p>

    <!-- Full Login Page Layout -->
    <ComponentPreview
      title="Complete Login Page Layout"
      description="Full-page login interface with split-screen design. Left panel features branding and messaging, right panel contains the login form."
    >
      <template #preview>
        <div class="w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
          <div class="grid grid-cols-2 h-full">
            <!-- Left Panel - Branding -->
            <div class="flex flex-col justify-between p-12" style="background: linear-gradient(135deg, #003366 0%, #0C3558 100%);">
              <div>
                <div class="flex items-center gap-3 mb-8">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: #FFFFFF;">
                    <span class="font-bold text-2xl" style="color: #003366;">C</span>
                  </div>
                  <div class="text-white">
                    <div class="font-bold text-xl">CEBUANA <span style="color: #E94B35;">LHUILLIER</span></div>
                    <div class="text-sm opacity-75">Back Office System</div>
                  </div>
                </div>
                <div class="text-white space-y-4">
                  <h2 class="text-3xl font-bold">Welcome Back</h2>
                  <p class="text-lg opacity-90">Secure access to your enterprise dashboard</p>
                  <div class="space-y-2 pt-4">
                    <div class="flex items-center gap-3">
                      <svg class="w-5 h-5" style="color: #36D399;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      <span class="opacity-90">Enterprise-grade security</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-5 h-5" style="color: #36D399;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      <span class="opacity-90">Real-time data access</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg class="w-5 h-5" style="color: #36D399;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      <span class="opacity-90">24/7 support available</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-white text-sm opacity-60">
                <p>© 2025 Cebuana Lhuillier. All rights reserved.</p>
                <p class="mt-1">Need help? Contact IT Support: support@cebuanalhuillier.com</p>
              </div>
            </div>

            <!-- Right Panel - Login Form -->
            <div class="flex items-center justify-center p-8 bg-base-100">
              <div class="w-full max-w-md space-y-6">
                <div>
                  <h3 class="text-2xl font-bold" style="color: #003366;">Sign In</h3>
                  <p class="text-sm text-base-content/60 mt-1">Enter your credentials to access the system</p>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-4">
                  <!-- Username -->
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">Username</span>
                    </label>
                    <input
                      v-model="loginForm.username"
                      type="text"
                      placeholder="Enter your username"
                      class="input input-bordered w-full"
                      required
                    />
                  </div>

                  <!-- Password -->
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">Password</span>
                    </label>
                    <div class="relative">
                      <input
                        v-model="loginForm.password"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Enter your password"
                        class="input input-bordered w-full pr-12"
                        required
                      />
                      <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm btn-circle"
                      >
                        <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Remember Me & Forgot Password -->
                  <div class="flex items-center justify-between">
                    <label class="label cursor-pointer gap-2">
                      <input v-model="loginForm.remember" type="checkbox" class="checkbox checkbox-sm" style="border-color: #003366;" />
                      <span class="label-text">Remember me</span>
                    </label>
                    <a href="#" class="text-sm hover:underline" style="color: #003366;">Forgot password?</a>
                  </div>

                  <!-- Login Button -->
                  <button
                    type="submit"
                    class="btn w-full text-white border-0 hover:opacity-90"
                    style="background-color: #003366;"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                    </svg>
                    Sign In
                  </button>
                </form>

                <!-- Help Text -->
                <div class="text-center text-sm text-base-content/60">
                  <p>Having trouble signing in?</p>
                  <p class="mt-1">Contact IT Support: <a href="mailto:support@cebuanalhuillier.com" class="hover:underline" style="color: #003366;">support@cebuanalhuillier.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Compact Login Card -->
    <ComponentPreview
      title="Compact Login Card"
      description="Alternative centered card layout for simpler login interfaces. Suitable for internal tools and focused login experiences."
      :code="compactLoginCode"
      language="html"
    >
      <template #preview>
        <div class="w-full min-h-[500px] flex items-center justify-center p-8 rounded-lg overflow-hidden" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
          <div class="card w-full max-w-md bg-base-100 shadow-2xl">
            <div class="card-body">
              <!-- Header -->
              <div class="text-center mb-4">
                <div class="inline-flex items-center gap-2 mb-4">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: #003366;">
                    <span class="text-white font-bold text-xl">C</span>
                  </div>
                </div>
                <h2 class="card-title text-2xl justify-center" style="color: #003366;">Back Office Login</h2>
                <p class="text-sm text-base-content/60 mt-2">Access your dashboard</p>
              </div>

              <!-- Form -->
              <fieldset class="fieldset">
                <legend class="fieldset-legend">Employee ID</legend>
                <input type="text" placeholder="Enter employee ID" class="input input-bordered w-full" />
              </fieldset>

              <fieldset class="fieldset">
                <legend class="fieldset-legend">Password</legend>
                <input type="password" placeholder="Enter password" class="input input-bordered w-full" />
              </fieldset>

              <div class="form-control mt-2">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-sm" style="border-color: #003366;" />
                  <span class="label-text">Keep me signed in</span>
                </label>
              </div>

              <div class="card-actions mt-4">
                <button class="btn w-full text-white" style="background-color: #003366;">
                  Sign In
                </button>
              </div>

              <div class="text-center mt-4">
                <a href="#" class="text-sm hover:underline" style="color: #003366;">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Security Features -->
    <ComponentPreview
      title="Security & Authentication Features"
      description="Essential security features for enterprise login systems including MFA, session management, and audit logging."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Two-Factor Authentication -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <div class="flex items-start gap-3">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: #003366;">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg" style="color: #003366;">Two-Factor Authentication</h3>
                  <p class="text-sm text-base-content/70 mt-1">Additional security layer with OTP verification via SMS or authenticator app</p>
                  <div class="mt-3 text-xs text-base-content/60">
                    <p>✓ Time-based One-Time Password (TOTP)</p>
                    <p>✓ SMS verification backup</p>
                    <p>✓ Recovery codes for account access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Session Management -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <div class="flex items-start gap-3">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: #003366;">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg" style="color: #003366;">Session Management</h3>
                  <p class="text-sm text-base-content/70 mt-1">Automatic timeout and session tracking for enhanced security</p>
                  <div class="mt-3 text-xs text-base-content/60">
                    <p>✓ 30-minute inactivity timeout</p>
                    <p>✓ Single sign-on (SSO) support</p>
                    <p>✓ Active session monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Audit Logging -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <div class="flex items-start gap-3">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: #003366;">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg" style="color: #003366;">Audit Logging</h3>
                  <p class="text-sm text-base-content/70 mt-1">Comprehensive logging of all authentication activities and user actions</p>
                  <div class="mt-3 text-xs text-base-content/60">
                    <p>✓ Login/logout timestamps</p>
                    <p>✓ Failed attempt tracking</p>
                    <p>✓ IP address logging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Password Policy -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <div class="flex items-start gap-3">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background-color: #003366;">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg" style="color: #003366;">Password Policy</h3>
                  <p class="text-sm text-base-content/70 mt-1">Enforced password complexity and regular rotation requirements</p>
                  <div class="mt-3 text-xs text-base-content/60">
                    <p>✓ Minimum 12 characters</p>
                    <p>✓ Mix of upper/lower case, numbers, symbols</p>
                    <p>✓ 90-day rotation policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Form Validation States -->
    <ComponentPreview
      title="Form Validation & Error States"
      description="Visual feedback for various form states including validation errors, loading states, and success messages."
      :code="validationCode"
      language="html"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Error State -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <h3 class="font-semibold mb-4">Error State</h3>
              <fieldset class="fieldset">
                <legend class="fieldset-legend">Username</legend>
                <input type="text" value="user123" class="input input-bordered input-error" />
                <div class="label">
                  <span class="label-text-alt text-error">
                    <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    Invalid credentials. Please try again.
                  </span>
                </div>
              </fieldset>
            </div>
          </div>

          <!-- Loading State -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <h3 class="font-semibold mb-4">Loading State</h3>
              <button class="btn w-full text-white" style="background-color: #003366;" disabled>
                <span class="loading loading-spinner loading-sm"></span>
                Signing in...
              </button>
            </div>
          </div>

          <!-- Success Alert -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <h3 class="font-semibold mb-4">Success Message</h3>
              <div class="alert alert-success">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Login successful! Redirecting...</span>
              </div>
            </div>
          </div>

          <!-- Warning Alert -->
          <div class="card bg-base-100 border border-base-300">
            <div class="card-body">
              <h3 class="font-semibold mb-4">Warning Message</h3>
              <div class="alert alert-warning">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <span>Your password will expire in 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Best Practices -->
    <ComponentPreview
      title="Back Office Login Best Practices"
      description="Security and UX guidelines for implementing enterprise authentication interfaces."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Do's -->
          <div class="space-y-4">
            <h3 class="font-bold text-lg flex items-center gap-2">
              <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style="background-color: #36D399;">✓</span>
              Security Best Practices
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Implement HTTPS/SSL for all login pages</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Use strong password requirements (12+ chars, complexity)</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Enable two-factor authentication for all users</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Implement account lockout after failed attempts</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Log all authentication activities with timestamps</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Use session timeouts (15-30 minutes inactivity)</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Provide clear error messages without revealing system details</span>
              </li>
            </ul>
          </div>

          <!-- Don'ts -->
          <div class="space-y-4">
            <h3 class="font-bold text-lg flex items-center gap-2">
              <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style="background-color: #F87272;">✗</span>
              Security Anti-Patterns
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't store passwords in plain text or weak encryption</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't show specific error messages (e.g., "username exists")</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't allow unlimited login attempts</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't use "Remember Me" for high-security systems</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't skip SSL certificate validation</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't allow password reuse from history</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't ignore security patches and updates</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentPreview from '../components/layout/ComponentPreview.vue'

// Login form state
const loginForm = ref({
  username: '',
  password: '',
  remember: false
})

const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login attempt:', loginForm.value)
  // Add login logic here
}

const compactLoginCode = `<!-- Compact Login Card -->
<div class="flex items-center justify-center min-h-screen p-8"
     style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
  <div class="card w-full max-w-md bg-base-100 shadow-2xl">
    <div class="card-body">
      <!-- Logo & Title -->
      <div class="text-center mb-4">
        <div class="w-10 h-10 rounded-lg mx-auto mb-4"
             style="background-color: #003366;">
          <span class="text-white font-bold text-xl">C</span>
        </div>
        <h2 class="text-2xl font-bold" style="color: #003366;">
          Back Office Login
        </h2>
      </div>

      <!-- Form Fields -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Employee ID</legend>
        <input type="text" placeholder="Enter employee ID"
               class="input input-bordered" />
      </fieldset>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">Password</legend>
        <input type="password" placeholder="Enter password"
               class="input input-bordered" />
      </fieldset>

      <!-- Remember Me -->
      <label class="label cursor-pointer justify-start gap-2">
        <input type="checkbox" class="checkbox checkbox-sm" />
        <span class="label-text">Keep me signed in</span>
      </label>

      <!-- Submit Button -->
      <button class="btn w-full text-white mt-4"
              style="background-color: #003366;">
        Sign In
      </button>

      <!-- Forgot Password Link -->
      <div class="text-center mt-4">
        <a href="#" class="text-sm hover:underline"
           style="color: #003366;">Forgot your password?</a>
      </div>
    </div>
  </div>
</div>`

const validationCode = `<!-- Error State Example -->
<fieldset class="fieldset">
  <legend class="fieldset-legend">Username</legend>
  <input type="text" value="user123"
         class="input input-bordered input-error" />
  <div class="label">
    <span class="label-text-alt text-error">
      Invalid credentials. Please try again.
    </span>
  </div>
</fieldset>

<!-- Loading Button -->
<button class="btn w-full" disabled>
  <span class="loading loading-spinner loading-sm"></span>
  Signing in...
</button>

<!-- Success Alert -->
<div class="alert alert-success">
  <svg class="w-6 h-6"><!-- check icon --></svg>
  <span>Login successful! Redirecting...</span>
</div>`
</script>

<style scoped>
/* Custom styles handled by DaisyUI and inline styles */
</style>
