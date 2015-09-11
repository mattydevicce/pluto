# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 20150910154928) do
=======
ActiveRecord::Schema.define(version: 20150910145618) do
>>>>>>> c0bc355cb2177f515d00c7372d3f060accf368f8

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bloggers", force: :cascade do |t|
    t.string   "name"
    t.string   "login"
<<<<<<< HEAD
    t.string   "password"
    t.text     "slogan"
=======
    t.string   "slogan"
    t.string   "password"
>>>>>>> c0bc355cb2177f515d00c7372d3f060accf368f8
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blogs", force: :cascade do |t|
<<<<<<< HEAD
    t.string   "title"
    t.text     "content"
    t.integer  "blogger_id"
=======
    t.integer  "blogger_id"
    t.string   "title"
    t.text     "content"
>>>>>>> c0bc355cb2177f515d00c7372d3f060accf368f8
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "blogs", ["blogger_id"], name: "index_blogs_on_blogger_id", using: :btree

<<<<<<< HEAD
  create_table "comments", force: :cascade do |t|
    t.text     "comment"
    t.integer  "blogger_id"
    t.integer  "blog_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["blog_id"], name: "index_comments_on_blog_id", using: :btree
  add_index "comments", ["blogger_id"], name: "index_comments_on_blogger_id", using: :btree

  add_foreign_key "blogs", "bloggers"
  add_foreign_key "comments", "bloggers"
  add_foreign_key "comments", "blogs"
=======
  add_foreign_key "blogs", "bloggers"
>>>>>>> c0bc355cb2177f515d00c7372d3f060accf368f8
end
