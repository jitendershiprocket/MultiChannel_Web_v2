import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http.service';
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
  isCODPanel:any;


  constructor(private router: Router, private httpService : HttpService) { }

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



  uploadFile(uploadUrl){

    var file = $('#fileUpload')[0].files[0];
    var formData = new FormData();
    formData.append("file", file);
    var data = {}

    
    this.httpService.post('v1/cod/process', formData, data)
      .subscribe((data:any) => {
        console.log(data);
          var fileObj = {
              name: file.name,
              file_id: data.file_id
          };
          this.fileArry.push(fileObj);
      });


  }





}
