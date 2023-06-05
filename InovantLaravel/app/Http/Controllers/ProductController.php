<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Product as ProductModel;
use \App\Models\Cart as CartModel;

class ProductController extends Controller
{
    /** to display all products */
    public function displayAllProducts()
    {
        $DBCartProducts = ProductModel::with('getCart')->get();
        return view('welcome')->with("data", $DBCartProducts);
    }

    /** to add product */
    public function addProduct(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
        ], [
            'name.required' => 'This field is required.',
            'price.required' => 'This field is required.',
        ]);

        $image = array();
        if($files = $request->file('images')){
            foreach($files as $file){
                $imageName = md5(rand(1000, 10000));
                $ext = strtolower($file->getClientOriginalExtension());
                $imageFullName = $imageName.".".$ext;
                $uploadPath = "images/products/";
                $imageUrl = $uploadPath.$imageFullName;
                $file->move($uploadPath, $imageFullName);
                $image[] = $imageUrl;
            }
        }
        $DBProduct = new ProductModel;
        $DBProduct->name = $request->name;
        $DBProduct->price = $request->price;
        $DBProduct->images = implode("|",$image);
        if ($DBProduct->save()) {
            return redirect(route('displayAllProducts'));
        } else {
            return redirect()->back()->with('error', 'There is some error.');
        }
    }

    /** to add product to cart */
    public function addToCart($id)
    {
        $DBCart = new CartModel;
        $DBCart->user_id = 1;
        $DBCart->product_id = $id;
        if ($DBCart->save()) {
            return redirect(route('displayAllProducts'));
        } else {
            return redirect()->back()->with('error', 'There is some error.');
        }
    }

    /** to remove product from cart */
    public function removeFromCart($id)
    {
        if(CartModel::where('user_id',1)->where('product_id',$id)->delete()){
            return redirect(route('displayAllProducts'));
        } else {
            return redirect()->back()->with('error', 'There is some error.');
        }
    }

    /** to display all products */
    public function displayAllProductsAPI()
    {
        $DBProducts = ProductModel::get();
        $products = array();
        foreach($DBProducts as $productRow){
            array_push($products, array(
                "name" => $productRow->name,
                "price" => $productRow->price,
                "images" => explode("|",$productRow->images),
            ));
        }
        return response()->json(["data"=> $products]);
    }
}
