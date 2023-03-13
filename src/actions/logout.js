// rrd imports
import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
// library
import { toast } from "react-toastify";

export async function logOutAction(){
    deleteItem({
        key:"username"
    })
    return redirect("/")
}