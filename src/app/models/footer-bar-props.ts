import { SKIPITEM } from "./skip-object";

export interface FooterBarProps {
  selectedSkip: SKIPITEM;
  onBack: () => void;
  onContinue: () => void;
}