<template>
  <!-- Loading Screen -->
  <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-gradient-to-br from-[#003366] via-[#004080] to-[#E94B35] flex flex-col items-center justify-center">
    <img
      src="/lhuillier-logo.png"
      alt="Lhuillier"
      class="h-16 sm:h-20 w-auto object-contain mb-8"
    />
    <div class="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
      <div class="h-full bg-white rounded-full loading-bar"></div>
    </div>
  </div>

  <div v-show="!isLoading" class="min-h-screen bg-gradient-to-b from-white via-base-100 to-base-200 overflow-x-hidden">
    <!-- Floating Navigation -->
    <nav
      class="fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300"
      :class="isScrolled ? 'top-3 sm:top-6' : 'top-4 sm:top-8'"
    >
      <div
        class="relative rounded-full border overflow-hidden transition-all duration-300"
        :class="isScrolled ? 'shadow-xl border-base-300/50' : 'shadow-none border-transparent'"
      >
        <!-- Two-tone background: blue section with 45° slant edge -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-white/80 backdrop-blur-xl"></div>
          <!-- Mobile: Subtle angled blue section for logo -->
          <div
            class="absolute top-0 left-0 h-full backdrop-blur-xl sm:hidden"
            style="
              background-color: rgba(12, 53, 88, 0.95);
              width: 60%;
              clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
            "
          ></div>
          <!-- Desktop: Slanted blue section -->
          <div
            class="absolute top-0 left-0 h-full backdrop-blur-xl hidden sm:block"
            style="
              background-color: rgba(12, 53, 88, 0.95);
              width: 24%;
              clip-path: polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%);
            "
          ></div>
        </div>

        <!-- Content -->
        <div class="relative flex items-center justify-between px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
          <!-- Logo -->
          <a href="#" class="flex flex-col items-end">
            <img
              src="/lhuillier-logo.png"
              alt="Lhuillier"
              class="h-9 sm:h-12 w-auto object-contain"
            />
            <span class="font-serif text-xs sm:text-sm text-white -mt-1 mr-1">Partner Portal</span>
          </a>

          <!-- Navigation Links - Desktop -->
          <div class="hidden lg:flex items-center gap-8">
            <a href="#features" class="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">Features</a>
            <a href="#services" class="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">Services</a>
            <a href="#about" class="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">About</a>
            <a href="#contact" class="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">Contact</a>
          </div>

          <!-- CTA Buttons -->
          <div class="flex items-center gap-2 sm:gap-3">
            <button class="btn btn-ghost btn-xs sm:btn-sm hidden md:flex">Log In</button>
            <button class="btn btn-primary btn-xs sm:btn-sm rounded-full px-3 sm:px-4 text-xs sm:text-sm">Get Started</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden py-20 sm:py-32 md:py-40">
      <!-- Floating Character - Desktop Right Side Only -->
      <div class="hidden xl:block absolute right-0 top-40 w-[500px] h-[500px] pointer-events-none">
        <img
          src="/mascot.png"
          alt="Cebuana Mascot"
          class="w-full h-full object-contain transform rotate-[-25deg] translate-x-28 floating-animation"
          style="filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));"
        />
      </div>

      <div class="max-w-6xl mx-auto text-center relative z-10">
        <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span class="block whitespace-nowrap" style="color: #003366;">Corporate Banking</span>
          <span class="block">
            <span style="color: #003366;">Made </span>
            <span class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style="color: #E94B35;">
              Easy
            </span>
          </span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/60 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Experience secure, fast, and reliable digital banking with <span class="whitespace-nowrap">Cebuana Lhuillier</span>. Your business's financial future starts here.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button class="btn btn-primary btn-sm sm:btn-md lg:btn-lg rounded-full px-6 sm:px-8 gap-2 w-full sm:w-auto">
            <span class="text-xs sm:text-sm lg:text-base">Open an Account</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <button class="btn btn-outline btn-sm sm:btn-md lg:btn-lg rounded-full px-6 sm:px-8 w-full sm:w-auto">
            <span class="text-xs sm:text-sm lg:text-base">Learn More</span>
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-base-content/50 px-2">
          <div class="flex items-center gap-1.5 sm:gap-2">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="whitespace-nowrap">PDIC Insured</span>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="whitespace-nowrap">Bank-Grade Security</span>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span class="whitespace-nowrap">500K+ Customers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span style="color: #E94B35;">Everything</span> <span style="color: #003366;">you need</span>
          </h2>
          <p class="text-base sm:text-lg text-base-content/60 px-2">Powerful features for modern banking</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <!-- Feature Card 1 -->
          <div class="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-500 ease-out border border-base-300/50 overflow-hidden group aspect-square card-hover">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style="background-image: url('/img1.jpg');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60"></div>
            <div class="relative h-full flex flex-col justify-end text-white">
              <h3 class="font-serif text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Lorem Ipsum</h3>
              <p class="text-white/90 text-xs sm:text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </div>

          <!-- Feature Card 2 -->
          <div class="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-500 ease-out border border-base-300/50 overflow-hidden group aspect-square card-hover">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style="background-image: url('/img2.jpg');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60"></div>
            <div class="relative h-full flex flex-col justify-end text-white">
              <h3 class="font-serif text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Dolor Sit</h3>
              <p class="text-white/90 text-xs sm:text-sm leading-relaxed">Sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
          </div>

          <!-- Feature Card 3 -->
          <div class="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-500 ease-out border border-base-300/50 overflow-hidden group aspect-square card-hover">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style="background-image: url('/img3.jpg');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60"></div>
            <div class="relative h-full flex flex-col justify-end text-white">
              <h3 class="font-serif text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Consectetur</h3>
              <p class="text-white/90 text-xs sm:text-sm leading-relaxed">Ut enim ad minim veniam quis nostrud exercitation ullamco.</p>
            </div>
          </div>

          <!-- Feature Card 4 -->
          <div class="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-500 ease-out border border-base-300/50 overflow-hidden group aspect-square card-hover">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style="background-image: url('/img4.jpg');"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60"></div>
            <div class="relative h-full flex flex-col justify-end text-white">
              <h3 class="font-serif text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Adipiscing</h3>
              <p class="text-white/90 text-xs sm:text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-base-200 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              <span style="color: #003366;">Banking that adapts to your business</span>
            </h2>
            <p class="text-base sm:text-lg text-base-content/60 mb-6 sm:mb-8 leading-relaxed px-2">
              Whether you're managing daily expenses, planning for the future, or growing your business,
              Cebuana Lhuillier Bank provides the tools and support you need.
            </p>
            <ul class="space-y-3 sm:space-y-4 px-2">
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0 mt-0.5 sm:mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <h4 class="font-serif font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Real-time Notifications</h4>
                  <p class="text-xs sm:text-sm text-base-content/60">Stay informed with instant alerts for every transaction</p>
                </div>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0 mt-0.5 sm:mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <h4 class="font-serif font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Budget Tracking</h4>
                  <p class="text-xs sm:text-sm text-base-content/60">Visualize your spending with smart analytics</p>
                </div>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0 mt-0.5 sm:mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <h4 class="font-serif font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">24/7 Support</h4>
                  <p class="text-xs sm:text-sm text-base-content/60">Get help anytime, anywhere from our dedicated team</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Right Content - Stats -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-base-300/50">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">99.9%</div>
              <div class="text-xs sm:text-sm text-base-content/60">Uptime Guarantee</div>
            </div>
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-base-300/50">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">₱50M+</div>
              <div class="text-xs sm:text-sm text-base-content/60">Daily Transactions</div>
            </div>
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-base-300/50">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-success mb-1 sm:mb-2">500K+</div>
              <div class="text-xs sm:text-sm text-base-content/60">Active Users</div>
            </div>
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-base-300/50">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-warning mb-1 sm:mb-2">40+</div>
              <div class="text-xs sm:text-sm text-base-content/60">Years of Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
          Ready to get started?
        </h2>
        <p class="text-base sm:text-lg text-base-content/60 mb-6 sm:mb-8 px-2">
          Join thousands of satisfied customers who trust Cebuana Lhuillier Bank
        </p>
        <button class="btn btn-primary btn-sm sm:btn-md lg:btn-lg rounded-full px-6 sm:px-8 lg:px-10 gap-2 w-full sm:w-auto max-w-md mx-auto sm:mx-0">
          <span class="text-xs sm:text-sm lg:text-base">Open Your Account Today</span>
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-neutral text-neutral-content py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h4 class="font-serif font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Products</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" class="hover:opacity-100 transition-opacity">Savings Account</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Current Account</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Loans</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Credit Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-serif font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" class="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Press</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-serif font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" class="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">FAQs</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-serif font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm opacity-80">
              <li><a href="#" class="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Cookie Policy</a></li>
              <li><a href="#" class="hover:opacity-100 transition-opacity">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-neutral-content/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2 sm:gap-3">
            <div class="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-primary font-bold text-xs sm:text-sm">C</span>
            </div>
            <span class="text-xs sm:text-sm text-center md:text-left">© 2025 Cebuana Lhuillier Bank. All rights reserved.</span>
          </div>
          <div class="flex gap-3 sm:gap-4">
            <a href="#" class="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-content/10 rounded-full flex items-center justify-center hover:bg-neutral-content/20 transition-colors">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-content/10 rounded-full flex items-center justify-center hover:bg-neutral-content/20 transition-colors">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-content/10 rounded-full flex items-center justify-center hover:bg-neutral-content/20 transition-colors">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Cebuana Lhuillier Banking Landing Page
// Inspired by Spline.design's minimalist aesthetic with floating navigation

const isScrolled = ref(false)
const isLoading = ref(true)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  // Preload images
  const imagesToPreload = [
    '/lhuillier-logo.png',
    '/mascot.png',
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg'
  ]

  let loadedCount = 0
  const totalImages = imagesToPreload.length

  imagesToPreload.forEach(src => {
    const img = new Image()
    img.onload = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        // All images loaded, hide loading screen after a short delay
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    }
    img.onerror = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    }
    img.src = src
  })

  window.addEventListener('scroll', handleScroll)

  // Smooth scroll for navigation links - use setTimeout to ensure DOM is ready
  setTimeout(() => {
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href')

        // Skip empty hash or just '#'
        if (!targetId || targetId === '#') {
          return
        }

        e.preventDefault()
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          // Get the element's position
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - 70

          // Scroll to the position with offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      })
    })
  }, 100)

  // Intersection Observer for scroll animations on mobile
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible')
      }
    })
  }, observerOptions)

  // Observe all card elements
  const cards = document.querySelectorAll('.card-hover')
  cards.forEach(card => {
    card.classList.add('card-animate')
    observer.observe(card)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 150px; /* Adjust for fixed navigation height */
}

/* Scroll animation for cards on mobile */
.card-animate {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.card-animate.card-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Logo color filter - converts white to primary blue while preserving red accent */
.logo-colored {
  filter: brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(2500%) hue-rotate(195deg) brightness(95%) contrast(105%);
}

/* Alternative: If you want to maintain the original colors but make it visible */
.logo-visible {
  filter: drop-shadow(0 0 2px rgba(0, 51, 102, 0.3));
}

/* Loading bar animation */
@keyframes loadingBar {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(400%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.loading-bar {
  width: 25%;
  animation: loadingBar 1.5s ease-in-out infinite;
}

/* Floating animation for mascot */
@keyframes floating {
  0%, 100% {
    transform: rotate(-25deg) translate(7rem, 0);
  }
  50% {
    transform: rotate(-25deg) translate(7rem, -20px);
  }
}

.floating-animation {
  animation: floating 3s ease-in-out infinite;
}

/* Beautiful card hover animation */
.card-hover {
  transform: translateY(0) translateZ(0);
  will-change: transform, box-shadow;
}

.card-hover:hover {
  transform: translateY(-12px) translateZ(0) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(0, 0, 0, 0.05),
              0 0 30px rgba(0, 51, 102, 0.15);
  border-color: rgba(0, 51, 102, 0.2);
}

.card-hover:hover .relative h3 {
  transform: translateY(-4px);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-hover:hover .relative p {
  transform: translateY(-2px);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s;
}

.card-hover .relative h3,
.card-hover .relative p {
  transition: transform 0.4s ease-out;
}
</style>
