from sqlalchemy import Column, Integer, String, ForeignKey, LargeBinary, DateTime
from sqlalchemy.orm import relationship
from ..database import Base

class Researcher(Base):
    __tablename__ = "researcher"

    id = Column(Integer, primary_key=True, index=True)
    token = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    image = Column(LargeBinary)