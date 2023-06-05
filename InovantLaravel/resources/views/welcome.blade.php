<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Inovant</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{asset('plugins/fontawesome-free/css/all.min.css')}}">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Tempusdominus Bootstrap 4 -->
        <link rel="stylesheet" href="{{asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
        <!-- iCheck -->
        <link rel="stylesheet" href="{{asset('plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
        <!-- JQVMap -->
        <link rel="stylesheet" href="{{asset('plugins/jqvmap/jqvmap.min.css')}}">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{asset('dist/css/adminlte.min.css')}}">
        <!-- overlayScrollbars -->
        <link rel="stylesheet" href="{{asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="{{asset('plugins/daterangepicker/daterangepicker.css')}}">
        <!-- summernote -->
        <link rel="stylesheet" href="{{asset('css/admin/summernote-bs4.min.css')}}">
        <!-- Select2 -->
        <link rel="stylesheet" href="{{asset('css/admin/select2/select2.min.css')}}">
        <link rel="stylesheet" href="{{asset('css/admin/select2-bootstrap4-theme/select2-bootstrap4.min.css')}}">
        <!-- dataTables bootstrap -->
        <link rel="stylesheet" href="{{asset('css/admin/dataTables.bootstrap4.min.css')}}">
        <!-- dataTables responsive -->
        <link rel="stylesheet" href="{{asset('css/admin/responsive.bootstrap4.min.css')}}">
    </head>
    <body>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding:10px">
                <a class="navbar-brand" href="#">Inovant Solutions</a>
            </nav>
            <!-- to add products -->
            <div class="card card-primary card-outline">
                <form role="form" method="POST" action="{{route('addProduct')}}" enctype="multipart/form-data">
                {{csrf_field()}}
                    <div class="card-body">
                        <div class="row">
                            <!-- name -->
                                <div class="form-group col-md-6">
                                    <label for="name">Product Name:</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Eg: Mobile" >
                                    @error('name')
                                        <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>    
                            <!-- price -->
                                <div class="form-group col-md-6">
                                    <label for="price">Product Price:</label>
                                    <input type="number" class="form-control" name="price" id="price" placeholder="Eg: 10000" >
                                    @error('price')
                                        <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>    
                            <!-- listing image -->
                                <div class="form-group col-md-4">
                                    <label for="images">Select Multiple Images</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" multiple class="custom-file-input" id="images" name="images[]" accept=".jpg,.jpeg,.png">
                                            <label class="custom-file-label" for="images">Choose file</label>
                                        </div>
                                    </div>
                                    @error('images')
                                        <span class="text-danger">{{$message}}</span>
                                    @enderror
                                </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Add Product</button>  
                    </div>
                </form>
            </div>
            <!-- to display all products -->
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3>All Products</h3>
                </div>
                <div class="card-body">
                    <table id="listTable" class="simple-dataTable table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Images</th>
                                <th style="width: 150px">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach( $data as $product)
                                <tr>
                                    <td>{{$loop->index+1}}</td>
                                    <td>{{$product->name}}</td>
                                    <td>{{$product->price}}</td>
                                    <td>
                                        @php
                                            $images = explode("|",$product->images);
                                        @endphp
                                        @foreach($images as $image)
                                            <img src="{{URL::to($image)}}" class="img-fluid rounded-3" alt="{{$product->name}}" style="height: 150px;width: 150px;" >
                                        @endforeach
                                    </td>
                                    <td>
                                        <a href="{{route('addToCart',['id'=>$product->id])}}" class="btn btn-info btn-sm">
                                            <i class="fas fa-pencil-alt">
                                            </i>
                                            Add to Cart
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Images</th>
                                <th style="width: 150px">Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <!-- to display cart products  -->
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3>Cart Products</h3>
                </div>
                <div class="card-body">
                    @foreach($data as $cart)
                        @if(count($cart->getCart) > 0)
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="form-group col-md-12">
                                        @php
                                            $images = explode("|",$cart->images);
                                        @endphp
                                        @foreach($images as $image)
                                            <img
                                                src="{{URL::to($image)}}" class="img-fluid rounded-3" alt="{{$cart->name}}" style="width: 100px;height: 100px;">
                                        @endforeach
                                    </div>
                                    <div class="form-group col-md-12">
                                        <div>
                                            <h5>{{$cart->name}}</h5>
                                        </div>
                                        <div style="width: 80px;">
                                            <h5 class="mb-0">₹{{$cart->price}}</h5>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <div>
                                            <a href="{{route('removeFromCart',['id'=>$cart->id])}}" class="btn btn-danger btn-sm">
                                                Remove {{$cart->name}} from Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
            <footer>
                <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                    © COPYRIGHT 2021 ALL RIGHTS RESERVED:
                    <a class="text-reset fw-bold" href="https://inovantsolutions.com/" target="_blank">Inovant Solutions</a>
                </div>
            </footer>
        </div>
        <!-- jQuery -->
        <script src="{{asset('plugins/jquery/jquery.min.js')}}"></script>
        <!-- jQuery UI 1.11.4 -->
        <script src="{{asset('plugins/jquery-ui/jquery-ui.min.js')}}"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
            $.widget.bridge('uibutton', $.ui.button)
        </script>
        <!-- Bootstrap 4 -->
        <script src="{{asset('plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <!-- ChartJS -->
        <script src="{{asset('plugins/chart.js/Chart.min.js')}}"></script>
        <!-- Sparkline -->
        <script src="{{asset('plugins/sparklines/sparkline.js')}}"></script>
        <!-- JQVMap -->
        <script src="{{asset('plugins/jqvmap/jquery.vmap.min.js')}}"></script>
        <script src="{{asset('plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
        <!-- jQuery Knob Chart -->
        <script src="{{asset('plugins/jquery-knob/jquery.knob.min.js')}}"></script>
        <!-- daterangepicker -->
        <script src="{{asset('plugins/moment/moment.min.js')}}"></script>
        <script src="{{asset('plugins/daterangepicker/daterangepicker.js')}}"></script>
        <!-- Tempusdominus Bootstrap 4 -->
        <script src="{{asset('plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
        <!-- Summernote -->
        <script src="{{asset('js/admin/summernote-bs4.min.js')}}"></script>
        <!-- Select2 -->
        <script src="{{asset('js/admin/select2/select2.full.min.js')}}"></script>
        <!-- overlayScrollbars -->
        <script src="{{asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
        <!-- AdminLTE App -->
        <script src="{{asset('dist/js/adminlte.js')}}"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="{{asset('dist/js/demo.js')}}"></script>
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <script src="{{asset('dist/js/pages/dashboard.js')}}"></script>
        <!-- DataTables -->
        <script src="{{asset('/js/admin/jquery.dataTables.min.js')}}"></script>
        <script src="{{asset('/js/admin/dataTables.bootstrap4.min.js')}}"></script>
        <script src="{{asset('/js/admin/dataTables.responsive.min.js')}}"></script>
        <script src="{{asset('/js/admin/responsive.bootstrap4.min.js')}}"></script>

        <!-- custom js -->
        <script src="{{asset('/js/admin/common-script.js')}}"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    </body>
</html>
