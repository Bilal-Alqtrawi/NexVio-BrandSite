import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ArrowDown, ArrowUp } from "lucide-react";

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

const FaqCard = ({ item, isOpen }: { item: FaqItemData; isOpen: boolean }) => (
  <AccordionItem
    key={item.id}
    value={item.id}
    className={`group overflow-hidden rounded-3xl border-none bg-transparent px-6 py-2 transition-all duration-300 ${isOpen ? "bg-[#F4F5F4]" : ""}`}
  >
    <AccordionTrigger className="flex items-start justify-start gap-4 py-4 hover:no-underline [&>svg]:hidden">
      <div
        className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-800 transition-colors duration-300 ${isOpen ? "bg-brand-yellow border-brand-yellow" : ""}`}
      >
        {!isOpen ? (
          <ArrowUp className="size-4 text-neutral-900" strokeWidth={2.5} />
        ) : (
          <ArrowDown className="size-4 text-neutral-900" strokeWidth={2.5} />
        )}
      </div>
      <h3 className="text-left font-bold text-neutral-900">{item.question}</h3>
    </AccordionTrigger>
    <AccordionContent className="pb-4 pl-12 text-neutral-600">
      {item.answer}
    </AccordionContent>
  </AccordionItem>
);

export default FaqCard;
