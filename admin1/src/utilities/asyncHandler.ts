import { showSwalError } from "@/contants/swal";
import Swal from "sweetalert2";

export async function asyncHandler<T>(callback: () => Promise<T>): Promise<T | null> {
  try {
    const result = await callback();
    
    return result;
  } catch (error: any) {
    
    console.error("Async error:", error);
    showSwalError(error?.message || "Unexpected error occureed. Please contact the administrator if issue persist.");

    return null;
  }
}
