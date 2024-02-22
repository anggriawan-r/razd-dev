import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { AppDispatch } from "@/store/store";
import { squareHovered } from "@/store/hover/hoverSlice";
import { FaPaperPlane } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      variant="outline"
      type="submit"
      disabled={isSubmitting}
      className="group flex w-[100px] items-center justify-center gap-2 self-center border-none font-semibold"
      onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
      onMouseLeave={() => dispatch(squareHovered(null))}
    >
      Send
      {isSubmitting ? (
        <AiOutlineLoading className="animate-spin" />
      ) : (
        <FaPaperPlane className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
      )}
    </Button>
  );
}

export default SubmitButton;
