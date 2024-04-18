from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/button_pressed")
def button_pressed():
    print("Button pressed!")
    return "Button pressed!"

if __name__ == "__main__":
    app.run(debug=True)
