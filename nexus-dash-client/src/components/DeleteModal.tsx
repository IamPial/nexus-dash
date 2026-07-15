"use client";

import { deleteDestinations } from "@/lib/actions/explore";
import { ExploreItem } from "@/lib/api/explore";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "sonner";


interface DeleteModalProps {
  destinations: ExploreItem;
}

export function DeleteModal({destinations}:DeleteModalProps) {
  const router = useRouter()

    const handleDelete = async()=>{
        await deleteDestinations(destinations._id)
         toast.success("Destinations Delete Successfully!", {
        style: {
          color: "#00c950",
        },
      });
      router.refresh()
    }
  return (
    <AlertDialog>
      <Button className="bg-white border hover:bg-red-400/50 border-red-400 rounded-lg"><FaRegTrashCan className="text-red-500 "/></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destinations permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinations?.title}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete } slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}