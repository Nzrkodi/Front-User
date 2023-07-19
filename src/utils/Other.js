import iziToast from "izitoast";
import Swal from "sweetalert2";

export default{
  getRange(meta){
    let page = meta.page || 1;
    let limit = meta.limit || 10;
  
    let start = (page - 1) * limit + 1;
    let end = start + limit - 1;
  
    return {
      start: start,
      end: end
    };
  },

  getNumber(index, meta){
    const range = this.getRange(meta);
	  return range.start + index;
  },

  toastSuccess(opt) {
    switch (opt.type) {
      case "success":
        iziToast.success({
          title: opt.title,
          message: opt.msg,
          position: "topRight"
        });
        break;
      
      case "info":
        iziToast.info({
          title: opt.title,
          message: opt.msg,
          position: "topRight"
        });
        break;

      case "warning":
        iziToast.warning({
          title: opt.title,
          message: opt.msg,
          position: "topRight"
        });
        break;

      case "error":
        iziToast.error({
          title: opt.title,
          message: opt.msg,
          position: "topRight"
        });
        break;
    
      default:
        break;
    }
  },

  sweetAlertQuestion(opt){
    Swal.fire({
      title             : opt.title,
      text              : opt.msg,
      icon              : 'warning',
      showCancelButton  : true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : opt.confirmMsg,
      cancelButtonText  : 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        opt.callback()
      }
    })
  }
}