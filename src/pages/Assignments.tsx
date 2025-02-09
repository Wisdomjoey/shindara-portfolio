import React, { useState, useEffect } from "react";
import { Upload, File as FileIcon, Trash2, Plus, Download } from "lucide-react";

interface Assignment {
  id: string;
  name: string;
  date: string;
  size: string;
  file: File;
}

const Assignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[], names?: string[]) => {
    const newAssignments = files.map((file, ind) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: (names ?? [])[ind] ?? file.name,
      date: new Date().toLocaleDateString(),
      size: formatFileSize(file.size),
      file: file,
    }));

    setAssignments((prev) => [...prev, ...newAssignments]);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeAssignment = (id: string) => {
    setAssignments((prev) => prev.filter((assignment) => assignment.id !== id));
  };

  const downloadAssignment = (assignment: Assignment) => {
    const url = URL.createObjectURL(assignment.file);
    const a = document.createElement("a");
    a.href = url;
    a.download = assignment.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const filePaths =
      ["Oluwasegun Oluwasindara precious - ASSIGNMENT 1.docx", "PROBLEM.pdf"]; // Replace with the actual file path

    const fetchData = async () => {
      try {
        const files: File[] = [];

        filePaths.forEach(filePath => {
          const res = await fetch(`https://shindara-portfolio-gcb9.vercel.app/${filePath}`);

        if (!res.ok) return console.log("Couldnt fetch file");

        const blob = await res.blob();
        const file = new File(
          [blob],
          filePath,
          { type: blob.type }
        );

          files.push(file)
        })
        
        handleFiles(files);
      } catch (error) {
        console.error(error);
        console.log("Something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            Assignments
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Upload and manage your assignments in one place
        </p>
      </div>

      <div
        className={`glass rounded-2xl p-12 mb-8 text-center ${
          dragActive && "ring-2 ring-indigo-500"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <div className="max-w-xl mx-auto">
          <Upload className="w-16 h-16 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Upload Assignments
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Drag and drop your files here, or click to browse
          </p>
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Plus className="mr-2 h-5 w-5" />
            Select Files
          </label>
        </div>
      </div>

      {assignments.length > 0 && (
        <div className="glass rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold dark:text-white">
              Uploaded Assignments
            </h2>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="p-6 flex items-center justify-between hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 glass rounded-xl">
                    <FileIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">
                      {assignment.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Uploaded on {assignment.date} • {assignment.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadAssignment(assignment)}
                    className="p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/50 group"
                    title="Download"
                  >
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 dark:text-slate-500 dark:group-hover:text-indigo-400" />
                  </button>
                  <button
                    onClick={() => removeAssignment(assignment.id)}
                    className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/50 group"
                  >
                    <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-500 dark:text-gray-500 dark:group-hover:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
