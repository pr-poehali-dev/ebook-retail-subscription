import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import AuthDialog from "@/components/AuthDialog";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Icon name="BookOpen" className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary font-montserrat">
              BookStore
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск книг..."
                className="w-full pl-10 pr-4"
              />
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              />
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#subscription"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Подписка
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                О нас
              </a>
            </nav>

            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </Button>

            {user ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="/profile">
                    <Icon name="User" className="h-5 w-5 mr-1" />
                    {user.name}
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={logout}>
                  Выйти
                </Button>
              </div>
            ) : (
              <Button size="sm" onClick={() => setIsAuthDialogOpen(true)}>
                Войти
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t pt-4 pb-4">
            <div className="space-y-2">
              <Input placeholder="Поиск книг..." />
              <nav className="flex flex-col space-y-2 mt-4">
                <a
                  href="#catalog"
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                >
                  Каталог
                </a>
                <a
                  href="#subscription"
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                >
                  Подписка
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-primary transition-colors py-2"
                >
                  О нас
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>

      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </header>
  );
};

export default Header;
