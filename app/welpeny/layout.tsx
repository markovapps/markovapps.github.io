import {NavigationBar} from "@/components/navigationBar";
import {content} from "@/config/content";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <NavigationBar data={content.welpeny}/>
      {children}
    </section>
  );
}
