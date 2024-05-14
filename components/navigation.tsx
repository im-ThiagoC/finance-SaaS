"use client"

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";

import { NavButton } from "@/components/nav-button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Overview"
  },
  {
    href: "/transactions",
    label: "Transactions"
  },
  {
    href: "/accounts",
    label: "Accounts"
  },
  {
    href: "/categories",
    label: "Categories"
  },
  {
    href: "/settings",
    label: "Settings"
  }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();
  const isMobile = useMedia("(max-width: 1023px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if(isMobile){
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="font-normal text-white bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition"
            >
              <Menu className="size-4"/>
          </Button>
        </SheetTrigger>
          
        </div>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === currentPath ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  };

  

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={currentPath === route.href}
        />
      ))}
    </nav>
  )
}