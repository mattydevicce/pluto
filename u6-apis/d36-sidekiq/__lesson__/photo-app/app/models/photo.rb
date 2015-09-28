require 'fileutils'

class Photo < ActiveRecord::Base
  attr_accessor :upload

  after_save do
    image = MiniMagick::Image.open(@upload.path)
    image.resize "500x500"
    image.format "jpg"
    image.write Rails.root.join('public','photos', "#{id}.jpg")
    image.resize "200x200"
    image.write Rails.root.join('public','photos', "#{id}.small.jpg")
  end
end
