import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FileCheck, LogOut } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <div className="cursor-pointer">
                    <FileCheck className="text-gray-700" strokeWidth={2} />
                    <span className="font-semibold text-sm text-gray-700">
                      Cereri
                    </span>
                  </div>
                </SidebarMenuButton>
                <SidebarMenuBadge className="text-green-500 bg-gray-200/90 ">
                  24
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-10">
        <Link href={"/"} className="flex justify-center w-full">
          <Button className="w-full" variant={"default"}>
            <LogOut />
            Pagină principală
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
