json.array!(@photos) do |photo|
  json.extract! photo, :id, :name, :description, :width, :length
  json.url photo_url(photo, format: :json)
end
