class PhotoResizeWorker
  include Sidekiq::Worker

  def perform(id, path)
    default_upload_path = Rails.root.join('public','photos', "#{id}.jpg")
    thumb_upload_path = Rails.root.join('public','photos', "#{id}.thumb.jpg")
    image = MiniMagick::Image.open(path)
    image.auto_orient
    image.resize "600x"
    image.format "jpg"
    image.write default_upload_path
    image.resize "100x"
    image.write thumb_upload_path
  end

end
