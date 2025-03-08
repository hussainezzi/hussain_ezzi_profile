import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 1. Top Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-indigo-600 px-21">  Hussain Ezzi</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6 text-sm font-medium">
            <NavigationMenuItem>
              <a href="#" className="hover:text-indigo-600">
                Home
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="hover:text-indigo-600">
                About
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="hover:text-indigo-600">
                Tech Stack
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="hover:text-indigo-600">
                Projects
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="hover:text-indigo-600">
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-5xl mx-auto  px-6 py-16">
      <main className="flex flex-col md:flex-row items-center justify-center px-30 py-16 gap-10">
        {/* Left: Greeting Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold">
            Hi <span role="img" aria-label="wave">👋</span>,
          </h2>
          <p className="text-4xl font-bold">
            My name is <span className="text-indigo-600">Hussain Ezzi </span>
          </p>
          <p className="text-2xl">I build things for Web and train models for Arabic Natural Language Processing</p>
        </div>

        {/* Right: Profile Image with Gradient Ring */}
        <div className="md:w-1/2 flex justify-center">
          {/* Outer container for the gradient ring */}
          <div className="bg-gradient-to-r from-pink-500 to-indigo-500 p-1 rounded-full">
            {/* Actual profile image */}
            <img
              src="/static/my_profile_pic.PNG" // <-- Replace with your actual image path or URL
              alt="Pavan MG"
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
        </div>
      </main>
      </section>
    </div>
  )
}
