"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row">
        <Link href="/">
          <div className="flex flex-row ">
            <Image src="/scissor.png" alt="LC Barbers" height={20} width={30} />
            <h1 className="font-bold md:text-2xl text-lg md:p-0 py-1 text-wrap flex uppercase">
              <p className="font-extrabold text-red-800  mr-2">SharpCut </p>
              Barbers
            </h1>
          </div>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
