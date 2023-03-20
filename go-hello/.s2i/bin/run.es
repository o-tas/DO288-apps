#!/bin/bash -e
#
# S2I run script for the 's2i-do288-go' image.
# The run script executes the server that runs your application.
#
# For more information see the documentation:
#	https://github.com/openshift/source-to-image/blob/master/docs/builder_image.md
#

echo "Starting app with lang option 'es'..."
exec /opt/app-root/app --lang es
