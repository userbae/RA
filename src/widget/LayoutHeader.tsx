import { MenuButton } from "features";

export function LayoutHeader() {
  return (
    <div className="flex justify-between bg-blue-300 p-3 items-center">
      <div>logo</div>
      <MenuButton />
    </div>
  );
}
