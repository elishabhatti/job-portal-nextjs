import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { UserCircle } from "lucide-react";
import Link from "next/link";

export const ApplicantProfileStatus = () => {
  return (
    <div className="flex flex-col gap-6">
      <Item variant="destructive">
        <ItemMedia variant="icon" className="bg-destructive">
          <UserCircle className="h-10 w-10 text-white" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-lg font-semibold">
            Your Profile editing is not completed
          </ItemTitle>
          <ItemDescription className="text-white/80 text-sm">
            Complete your profile editing & build your custom Resume to get
            better job recommendations.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="destructive" asChild>
            <Link href="/dashboard/settings">Edit Profile</Link>
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
};
