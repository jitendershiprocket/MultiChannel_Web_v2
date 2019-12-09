import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../shared/services/http.service';
import { UploadfileadminService } from '../../shared/services/admin/uploadfileadmin.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-upload-cas',
  templateUrl: './upload-cas.component.html',
  styleUrls: ['./upload-cas.component.scss']
})
export class UploadCASComponent implements OnInit {

  fileArry = [];
  fileUrls = {
    downloadFileURL: '',
    uploadFileUrl: '',
    sampleFileName: '',
    headingName: '',
    downloadErrorFileUrl: ''
  };
  isCODPanel: any;


  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService, private UploadfileadminService: UploadfileadminService, private toastr: ToastrService) { }

  ngOnInit() {


    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });


    switch (this.router.url) {
      case "/SOW-Panel":
        this.fileUrls.downloadFileURL = 'orders/sample/sow';
        this.fileUrls.uploadFileUrl = 'courier/upload/sow_target';
        this.fileUrls.sampleFileName = 'sowSample';
        this.fileUrls.headingName = 'SOW Panel';
        this.isCODPanel = 0;
        break;
      case "/upload-awbs":
        this.fileUrls.downloadFileURL = 'orders/sample/prefetch_awbs';
        this.fileUrls.uploadFileUrl = 'courier/upload/prefetched_awbs';
        this.fileUrls.sampleFileName = 'sampleAwbs';
        this.fileUrls.headingName = 'Upload Awbs';
        this.isCODPanel = 0;
        break;
      case "/COD-Panel":
        this.fileUrls.downloadFileURL = 'cod/export/sample';
        this.fileUrls.uploadFileUrl = 'cod/process';
        this.fileUrls.sampleFileName = 'codSample';
        this.fileUrls.headingName = 'COD Panel';
        this.isCODPanel = 1;
        this.fileUrls.downloadErrorFileUrl = 'cod/download/error_file';
        break;
    }
  }



  uploadFile(uploadUrl) {
    var file = $('#fileUpload')[0].files[0];
    var formData = new FormData();
    formData.append("file", file);
    var data = {}

    this.httpService.importFile(formData, uploadUrl)
    this.UploadfileadminService.uploadFileService(formData, uploadUrl).subscribe(response => {
      if (response) {
        this.toastr.success(response);
      } else {
        this.toastr.warning(response.error);
      }
    })
  }


  downloadfile(url, fileName) {
    var fileName = $('#' + fileName).data('name') ? $('#' + fileName).data('name') : fileName;
    fileName = fileName + '.csv';
    var filters = {}
      this.UploadfileadminService.downloadFileService(url, filters).subscribe(response => {
        if (response) {
          // response.data ? this.toastr.warning(response.data) : this.downloadDataWithUrl(response.download_url, fileName);
          response.data.message ? this.toastr.warning(response.data.message) : this.downloadDataWithUrl(response.data, fileName);
        } else {
          this.toastr.warning(response.error);
        }
      })




  }



downloadDataWithUrl(url, filename) {
  // Construct the a element
  
  if (!url) {
    return;
  }
  
  window.location.assign(url);



};






}
