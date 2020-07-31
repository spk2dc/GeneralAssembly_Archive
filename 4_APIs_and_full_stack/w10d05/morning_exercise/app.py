class Member:
  def __init__(self, full_name):
    self.full_name = full_name

  def introduce(self):
    print("Hi, my name is", self.full_name)

class Student(Member):
  def __init__(self, full_name, reason):
    Member.__init__(self, full_name)
    self.reason = reason

class Instructor(Member):
  def __init__(self, full_name, bio):
    Member.__init__(self, full_name)
    self.bio = bio
    self.skills = []

  def add_skill(self, skill):
    self.skills.append(skill)

class Workshop:
  def __init__(self, date, subject):
    self.date = date
    self.subject = subject
    self.instructors = []
    self.students = []

  def add_participant(self, member):
    # if instuctor add to instructors
    if type(member) == Instructor:
      self.instructors.append(member)
    else:
      # else add to students
      self.students.append(member)

  def print_details(self):
    print("Workshop -", self.date, "-", self.subject, "\n")
    print("Students")
    for idx, student in enumerate(self.students):
      print(idx + 1, student.full_name, "-", student.reason)
    print("\n", "Instructors")
    for idx, instructor in enumerate(self.instructors):
      print(idx + 1, instructor.full_name, "-", *instructor.skills, sep=" ")
      print(instructor.bio)





ben = Instructor("Ben Manning", "I have programmed for some time now")
james = Instructor("James Godfrey-Kittle", "I have programmed for even more time")
ben.add_skill("Ruby")
james.add_skill("Python")
james.add_skill("Wizardry")
student = Student("Student Person", "I want to learn how to program very soon")
student2 = Student("Another Student", "I want to take over the world with my skills!")
workshop = Workshop("12-12-2020", "Winter SEI Course")


workshop.add_participant(james)
workshop.add_participant(ben)
workshop.add_participant(student)
workshop.add_participant(student2)
# print(workshop.instructors)
# print(workshop.students)

workshop.print_details()

# print(workshop.date)
# print(workshop.subject)
# print(ben.skills)
# ben.add_skill("Ruby")
# james.add_skill("Python")
# print(ben.skills)
# print(james.skills)
# ben.introduce()
# james.introduce()