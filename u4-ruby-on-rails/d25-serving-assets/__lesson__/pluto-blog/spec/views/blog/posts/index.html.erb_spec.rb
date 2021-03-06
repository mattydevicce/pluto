require 'rails_helper'

RSpec.describe "blog/posts/index", type: :view do
  before(:each) do
    assign(:blog_posts, [
      Blog::Post.create!(
        :user => nil,
        :title => "Title",
        :body => "MyText"
      ),
      Blog::Post.create!(
        :user => nil,
        :title => "Title",
        :body => "MyText"
      )
    ])
  end

  it "renders a list of blog/posts" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
