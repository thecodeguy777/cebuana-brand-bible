<template>
  <div class="min-h-screen bg-gradient-to-br from-[#003366] via-[#E94B35] to-[#003366] flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <!-- Logo and Header -->
      <div class="text-center mb-8">
        <div class="inline-block bg-[#003366] p-8 rounded-2xl shadow-2xl mb-6">
          <span class="text-white font-bold text-6xl">C</span>
        </div>
        <h1 class="heading-3 text-white mb-2">Banking Branding Bible</h1>
        <p class="body-regular text-white/80">Developer's Access Portal</p>
      </div>

      <!-- Login Card -->
      <div class="card bg-base-100 shadow-2xl">
        <div class="card-body">
          <h2 class="heading-5 text-center mb-6">Sign In</h2>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-4">
            <!-- Employee ID -->
            <fieldset class="fieldset">
              <legend class="fieldset-legend">Employee ID</legend>
              <input
                v-model="formData.employeeId"
                type="text"
                placeholder="Enter your employee ID"
                class="input input-bordered w-full"
                required
              />
            </fieldset>

            <!-- Password -->
            <fieldset class="fieldset">
              <legend class="fieldset-legend">Password</legend>
              <input
                v-model="formData.password"
                type="password"
                placeholder="Enter your password"
                class="input input-bordered w-full"
                required
              />
            </fieldset>

            <!-- Remember Me -->
            <div class="flex items-center justify-between">
              <label class="label cursor-pointer gap-2 p-0">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm" />
                <span class="label-text">Remember me</span>
              </label>
              <a href="#" class="link link-primary text-sm">Forgot password?</a>
            </div>

            <!-- Login Button -->
            <button type="submit" class="btn btn-primary w-full">
              Sign In
            </button>
          </form>

          <!-- Divider -->
          <div class="divider">OR</div>

          <!-- SSO Options -->
          <div class="space-y-2">
            <button class="btn btn-outline w-full gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google Workspace
            </button>

            <button class="btn btn-outline w-full gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              Sign in with Microsoft 365
            </button>
          </div>

          <!-- Help Text -->
          <div class="text-center mt-6">
            <p class="text-sm text-base-content/60">
              Need access? Contact
              <a href="mailto:it.support@cebuanalhuillier.com" class="link link-primary">IT Support</a>
            </p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-6 text-white/60 text-sm">
        <p>© 2025 Cebuana Lhuillier Bank. All rights reserved.</p>
        <p class="mt-2">For authorized employees only</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  employeeId: '',
  password: ''
})

const handleLogin = () => {
  // Mockup login - just redirect to home for demonstration
  console.log('Login attempt:', formData.value)

  // In a real implementation, this would call an authentication API
  // For now, just simulate successful login
  router.push('/home')
}
</script>
